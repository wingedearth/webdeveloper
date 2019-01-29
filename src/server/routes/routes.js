import express from 'express';

const router = express.Router({ strict: false });

const MainController = (req, res) => {
	res.send('well hello there, world!');
};

router.get('/', MainController);

export default router;
