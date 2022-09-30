/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';

export const handleLogin = (req: Request, res: Response) => {
  res.json({
    body: req.body,
  });
};
