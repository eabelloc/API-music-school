const CourseRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteElement,
    getByName} = require('./course.controller');

CourseRoutes.get('/', getAll)
CourseRoutes.get('/:id', getById)
CourseRoutes.get('/name/:name', getByName)
CourseRoutes.post('/', create)
CourseRoutes.patch('/update/:id', update)
CourseRoutes.delete('/delete/:id', deleteElement)

module.exports = CourseRoutes