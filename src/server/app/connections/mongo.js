import mongoose, {
    connect,
    connection
} from "mongoose";

const mongoHost = process.env.MONGO_HOST || "NEO";

export default () => {
    connect(`mongodb://${mongoHost}:27017/AKHomeSensorsApp`, {
        useNewUrlParser: true,
        appname: "AKHomeSensorsWebApp",
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
}