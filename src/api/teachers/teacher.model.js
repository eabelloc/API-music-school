const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true }, 
    instruments: [{ type: Schema.Types.ObjectId, ref: "instruments" }],
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('teachers', schema);