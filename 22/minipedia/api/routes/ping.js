import { Router } from 'express';

const router = Router();

router.get('/ping', (req, res) => {
 return res.status(200).send('pong');
});


export default router;