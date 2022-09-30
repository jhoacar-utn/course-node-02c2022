import mongoose, { connection } from './connection';

export const initialization = async () => {
  try {
    await connection();
    console.log('Connection with mongo enabled');
  } catch (error: any) {
    throw new Error(`Error connection: ${error.message}`);
  }
};

export default mongoose;
