import {
    Router
} from 'express';

import Temperature from '../model/temperature';

var router = Router();

/* GET home page. */
router.get('/', async(req, res) => {

    try {
        const todos = await Temperature.find();
        res.json(todos);
    } catch (err) {
        res.json(err);
    }

});

/* GET home page. */
router.get('/:roomName', async(req, res) => {

    try {
        const todos = await Temperature
            .find({
                roomName: req.params.roomName
            })
            .limit(10)
            .sort({
                dateTime: -1
            });
        res.json(todos);
    } catch (err) {
        res.json(err);
    }

});

router.post('/', async(req, res) => {

    const temperature = new Temperature({
        dateTime: req.body.dateTime,
        roomName: req.body.roomName,
        hic: req.body.hic,
        hif: req.body.hif,
        humidity: req.body.humidity,
        temperatureC: req.body.temperatureC,
        temperatureF: req.body.temperatureF,
    });

    try {
        const newTemperature = await temperature.save();
        res.status(201).json(newTemperature);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

export default router;