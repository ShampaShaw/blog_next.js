import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URL);
    connection.isConnected = db.connections[0].readyState === 1; // Set isConnected to true if the connection is established
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
