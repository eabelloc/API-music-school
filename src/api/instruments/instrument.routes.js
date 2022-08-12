const InstrumentRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteElement,
    getByName } = require('./instrument.controller');

InstrumentRoutes.get('/', getAll)
InstrumentRoutes.get('/:id', getById)
InstrumentRoutes.get('/name/:name', getByName)
InstrumentRoutes.post('/', create)
InstrumentRoutes.patch('/update/:id', update)
InstrumentRoutes.delete('/delete/:id', deleteElement)

module.exports = InstrumentRoutes