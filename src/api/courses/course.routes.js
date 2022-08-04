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
CourseRoutes.get('/update/:id', update)
CourseRoutes.get('/delete/:id', deleteElement)

module.exports = CourseRoutes