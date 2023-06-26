import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());

app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/quotes', routes.quote);

app.listen(3000, () => {
    console.log(process.env.ENVIRONMENT);
    console.log('Example app listening on port 3000!')
});

