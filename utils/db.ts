import mongoose, { ConnectOptions, Connection } from "mongoose";
import logger from "./logger";

export const dbConnect = async (): Promise<Connection> => {
  const uri = process.env.MONGO_DB_URI as string;
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(uri, {
      dbName: "share-prompts",
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);
    logger.debug("Successfully connected to MOngoDB...");
    return mongoose.connection;
  } catch (error) {
    logger.error("Error connecting to MongoDB: ", error);
    throw error;
  }
};
