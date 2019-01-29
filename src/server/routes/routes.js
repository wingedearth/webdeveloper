import express from 'express';
import MainController from '../controllers/MainController';

const router = express.Router({ strict: false });

router.get('/', MainController);

export default router;
