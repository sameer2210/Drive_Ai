import mongoose from 'mongoose';

const connectDB = async () => {
  if (!process.env.MONGO_URI) throw new Error('MONGO_URI missing');
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected:', conn.connection.host);
};

export default connectDB;
