const Course = require('./course.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const courses = await Course.find().populate("instruments students");
        return res.json({
            status: 200,
            message: 'Recovered all courses',
            data: { courses }
        });
    } catch (error) {
        return next(setError(500, 'Failed all courses'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const course = await Course.findById(id).populate("instruments students");
        if (!course) return next(setError(404, 'Course not found'))
        return res.json({
            status: 200,
            message: 'Recovered course by id',
            data: { course }
        });
    } catch (error) {
        return next(setError(500, 'Failed course by id'))
    }
}

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const course = await Course.find({name:name});
        if (!course) return next(setError(404, 'Course not found'));
        return res.json({
            status: 200,
            message: 'Recovered course by name',
            data: { course }
        });
    } catch (error) {
        return next(setError(500, 'Failed course by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const CourseToSave = new Course(req.body)
        const courseInDb = await CourseToSave.save()
        return res.json({
            status: 201,
            message: 'Created new course',
            data: { courseInDb }
        });
    } catch (error) {
        return next(setError(500, 'Failed created course'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const course = new Course(req.body);
        course._id = id;
        const updatedCourse = await Course.findByIdAndUpdate(id, course)
        if (!updatedCourse) return next(setError(404, 'Course not found'))
        return res.json({
            status: 201,
            message: 'Updated course by id',
            data: { updatedCourse }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated course by id'));
    }
}

const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedCourse = await Course.findByIdAndDelete(id)
        if (!deletedCourse) return next(setError(404, 'Course not found'))
        return res.json({
            status: 200,
            message: 'Deleted course by id',
            data: { deletedCourse }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted course by id'));
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteElement,
    getByName
}