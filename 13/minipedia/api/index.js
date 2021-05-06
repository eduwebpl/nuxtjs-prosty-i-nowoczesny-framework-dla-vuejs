import Express from 'express';
import Ping from './routes/ping';

const app = Express();

app.use(Ping);

export default app;