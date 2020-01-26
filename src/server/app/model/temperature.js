import {
    Schema,
    model
} from "mongoose";

var temperatureSchema = new Schema({
    dateTime: {
        type: Date,
        required: true
    },
    roomName: {
        type: String,
        required: true,
        index: true
    },
    hic: {
        type: Number,
        required: true
    },
    hif: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    temperatureC: {
        type: Number,
        required: true
    },
    temperatureF: {
        type: Number,
        required: true
    }
});

temperatureSchema.index({
    roomName: 1,
    dateTime: -1
});

export default model("Temperature", temperatureSchema);