const TeacherRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteElement,
    getByName } = require('./teacher.controller');

TeacherRoutes.get('/', getAll)
TeacherRoutes.get('/:id', getById)
TeacherRoutes.get('/name/:name', getByName)
TeacherRoutes.post('/', create)
TeacherRoutes.get('/update/:id', update)
TeacherRoutes.get('/delete/:id', deleteElement)

module.exports = TeacherRoutes