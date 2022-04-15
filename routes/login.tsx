import { Request, Response } from 'express';
const router = require('express').Router();

router.route('/api/login').post((req: Request, res: Response) => {
    res.status(200).json({ username: 'Simeon', password: 'Ikudabo' });
});

