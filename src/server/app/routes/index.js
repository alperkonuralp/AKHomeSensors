import {
    Router
} from 'express';
import version from '../bin/version';

var router = Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.send('Welcome to AKHomeSensors');
});

router.get('/version', function(req, res) {
    res.json(version);
});

export default router;