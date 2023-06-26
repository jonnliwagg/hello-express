import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import bodyParser from 'body-parser';
import models from '../models';

const router = Router();

router.use((req, res, next) => {
    req.context = {
        models
    };
    next();
});

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.quotes));
});

router.get('/:quoteId', (req, res) => {
    return res.send(req.context.models.quotes[req.params.quoteId]);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {
    const id = uuidv4();
    const quote = {
        id,
        quote: req.body.quote,
        author: req.body.author,
        year: req.body.year,
    };
    req.context.models.quotes[id] = quote;

    return res.send(quote);
});

router.use((req, res, next) => {
    req.serverMessage = 'server generated quote';
    next();
});

export default router;