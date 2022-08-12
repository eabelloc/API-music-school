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
StudentRoutes.patch('/update/:id', update)
StudentRoutes.delete('/delete/:id', deleteElement)

module.exports = StudentRoutes