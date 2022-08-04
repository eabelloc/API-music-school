const Student = require('./student.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const student = await Student.find().populate("courses");
        return res.json({
            status: 200,
            message: 'Recovered all students',
            data: { student }
        });
    } catch (error) {
        return next(setError(500, 'Failed all courses'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const student = await Student.findById(id).populate("courses");
        if (!student) return next(setError(404, 'Student not found'))
        return res.json({
            status: 200,
            message: 'Recovered student by id',
            data: { student }
        });
    } catch (error) {
        return next(setError(500, 'Failed student by id'))
    }
}

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const student = await Student.find({name:name});
        if (!student) return next(setError(404, 'student not found'));
        return res.json({
            status: 200,
            message: 'Recovered student by name',
            data: { student }
        });
    } catch (error) {
        return next(setError(500, 'Failed student by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const StudentToSave = new Student(req.body)
        const studentInDb = await StudentToSave.save()
        return res.json({
            status: 201,
            message: 'Created new student',
            data: { studentInDb }
        });
    } catch (error) {
        return next(setError(500, 'Failed created student'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const student = new Student(req.body);
        student._id = id;
        const updatedStudent = await Student.findByIdAndUpdate(id, student)
        if (!updatedStudent) return next(setError(404, 'Student not found'))
        return res.json({
            status: 201,
            message: 'Updated student',
            data: { updatedStudent }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated student'));
    }
}

const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedStudent = await Student.findByIdAndDelete(id)
        if (!deletedStudent) return next(setError(404, 'Student not found'))
        return res.json({
            status: 200,
            message: 'Deleted student by id',
            data: { deletedStudent }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted student by id'));
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