const StudentRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteElement,
    getByName } = require('./student.controller');

StudentRoutes.get('/', getAll)
StudentRoutes.get('/:id', getById)
StudentRoutes.get('/name/:name', getByName)
StudentRoutes.post('/', create)
StudentRoutes.get('/update/:id', update)
StudentRoutes.get('/delete/:id', deleteElement)

module.exports = StudentRoutes