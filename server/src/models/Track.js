const mongoose = require('mongoose')

const PointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,
    }
});

const TrackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "User"
    },
    name: {
        type: String,
        default: '',
    },
    location: [PointSchema]
});

module.exports = mongoose.model('Track', TrackSchema);
