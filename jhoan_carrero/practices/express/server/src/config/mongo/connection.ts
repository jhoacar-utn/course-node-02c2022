import mongoose from 'mongoose';
import { uri } from '@config/database';

export const connection = async () => {
  await mongoose.connect(uri);
};

export default mongoose;
