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
TeacherRoutes.patch('/update/:id', update)
TeacherRoutes.delete('/delete/:id', deleteElement)

module.exports = TeacherRoutes