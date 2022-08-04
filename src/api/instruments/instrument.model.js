const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    duration: { type: String, required: true },    
    courses: [{ type: Schema.Types.ObjectId, ref: "courses" }],
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('instruments', schema);