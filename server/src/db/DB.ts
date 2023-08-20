import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDBURI: string = process.env.DBURL || "";
const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBURI);
    console.log("MongoDB connected");
  } catch (error: any) {
    console.log(
      "[Error] MongoDB did not get connected due to issue " + error.message
    );
    process.exit(1);
  }
};

export default connectDB;
