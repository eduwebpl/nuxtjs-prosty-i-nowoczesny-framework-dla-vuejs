import Express from 'express';
import Ping from './routes/ping';
import Wiki from './routes/wiki';

const app = Express();

app.use(Ping);
app.use('/wiki/', Wiki);

export default app;