const Instrument = require('./instrument.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const instrument = await Instrument.find().populate("courses");
        return res.json({
            status: 200,
            message: 'Recovered all instruments',
            data: { instrument }
        });
    } catch (error) {
        return next(setError(500, 'Failed all instruments'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const instrument = await Instrument.findById(id).populate("courses");
        if (!instrument) return next(setError(404, 'Instrument not found'))
        return res.json({
            status: 200,
            message: 'Recovered instrument by id',
            data: { instrument }
        });
    } catch (error) {
        return next(setError(500, 'Failed instrument by id'))
    }
}

const getByName = async (req, res, next) => {
    try {
        const {name} = req.params;
        const instrument = await Instrument.find({name:name});
        if (!instrument) return next(setError(404, 'Instrument not found'));
        return res.json({
            status: 200,
            message: 'Recovered instrument by name',
            data: { instrument }
        });
    } catch (error) {
        return next(setError(500, 'Failed instrument by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const InstrumentToSave = new Instrument(req.body)
        const instrumentInDb = await InstrumentToSave.save()
        return res.json({
            status: 201,
            message: 'Created new instrument',
            data: { instrumentInDb }
        });
    } catch (error) {
        return next(setError(500, 'Failed created instrument'))
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const instrument = new Instrument(req.body);
        instrument._id = id;
        const updatedInstrument = await Instrument.findByIdAndUpdate(id, instrument)
        if (!updatedInstrument) return next(setError(404, 'Instrument not found'))
        return res.json({
            status: 201,
            message: 'Updated instrument by id',
            data: { updatedInstrument }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated instrument by id'));
    }
}

const deleteElement = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedInstrument = await Instrument.findByIdAndDelete(id)
        if (!deletedInstrument) return next(setError(404, 'Instrument not found'))
        return res.json({
            status: 200,
            message: 'Deleted instrument by id',
            data: { deletedInstrument }
        });
    } catch (error) {
        return next(setError(500, 'Failed deleted instrument by id'));
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