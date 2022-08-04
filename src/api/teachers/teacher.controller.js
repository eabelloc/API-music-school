const Teacher = require('./teacher.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const teacher = await Teacher.find().populate("instruments");
        return res.json({
            status: 200,
            message: 'Recovered all teachers',
            data: { teacher }
        });
    } catch (error) {
        return next(setError(500, 'Failed all teachers'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const teacher = await Teacher.findById(id).populate("instruments");
        if (!teacher) return next(setError(404, 'Teacher not found'))
        return res.json({
            status: 200,
            message: 'Recovered teacher by id',
            data: { teacher }
        });
    } catch (error) {
        return next(setError(500, 'Failed teacher by id'))
    }
}

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const teacher = await Teacher.find({name:name});
        if (!teacher) return next(setError(404, 'Teacher not found'));
        return res.json({
            status: 200,
            message: 'Recovered teacher by name',
            data: { student }
        });
    } catch (error) {
        return next(setError(500, 'Failed teacher by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const TeacherToSave = new Teacher(req.body)
        const teacherInDb = await TeacherToSave.save()
        return res.json({
            status: 201,
            message: 'Created new teacher',
            data: { teacherInDb }
        });
    } catch (error) {
        return next(setError(500, 'Failed created teacher'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const teacher = new Teacher(req.body);
        teacher._id = id;
        const updatedTeacher = await Teacher.findByIdAndUpdate(id, teacher)
        if (!updatedTeacher) return next(setError(404, 'Teacher not found'))
        return res.json({
            status: 201,
            message: 'Updated teacher by id',
            data: { updatedTeacher }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated teacher by id'));
    }
}

const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedTeacher = await Teacher.findByIdAndDelete(id)
        if (!deletedTeacher) return next(setError(404, 'Teacher not found'))
        return res.json({
            status: 200,
            message: 'Deleted teacher by id',
            data: { deletedTeacher }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted teacher by id'));
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