import { Router } from 'express';
import { battle, getFighters } from '../controllers/fighterController.js';

const battleRouter: Router = Router();
battleRouter.post("/battle", battle);
battleRouter.get("/ranking", getFighters);

export default battleRouter;