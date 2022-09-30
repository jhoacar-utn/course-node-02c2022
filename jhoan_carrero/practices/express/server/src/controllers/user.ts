/* eslint-disable import/prefer-default-export */
import { User as UserModel } from '@models';
import { User } from '@src/models/schemas';
import { Request, Response } from 'express';

export const handleRegister = async (req: Request, res: Response) => {
  try {
    const userInstance: User = new UserModel(req.body);
    const userSaved = await userInstance.save();
    res.status(201)
      .send({
        message: 'User created successfully',
        body: userSaved,
      });
  } catch (error: any) {
    res.status(500)
      .send({
        error: error.message,
      });
  }
};
