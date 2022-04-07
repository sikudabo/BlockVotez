import { Request, Response } from 'express';

export type RequesetType = {
    req: Request,
    res: Response,
};