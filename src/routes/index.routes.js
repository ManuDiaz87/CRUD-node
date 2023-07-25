import {Router} from 'express';
import { listarCategorias } from '../controllers/index.controller.js';

const router = Router();

router.get('/', listarCategorias)

export default router;