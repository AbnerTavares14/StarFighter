import { Router } from 'express';
import battleRouter from './battleRouter.js';

const router: Router = Router();

router.use(battleRouter);

export default router;