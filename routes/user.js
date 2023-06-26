import { Router } from 'express';
import models from '../models';

const router = Router();

router.use((req, res, next) => {
    req.context = {
        models
    };
    next();
});

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
    return res.send(Object.values(req.context.models.users[req.params.userId]));
});

export default router;


// app.post('users', (req, res) => {
//     res.send(Object.values(req.context.models.users[req.oa]))
// })

// app.put('/users/:userId', (req, res) => {
//     res.send(`Received a PUT HTTP method on user/${req.params.userId} resource`)
// })

// app.delete('/:userId', (req, res) => {
//     res.send(`Received a DELETE HTTP method on user/${req.params.userId} resource`)
// })