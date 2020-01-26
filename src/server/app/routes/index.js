import {
    Router
} from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.send('Welcome to AKHomeSensors');
});

export default router;