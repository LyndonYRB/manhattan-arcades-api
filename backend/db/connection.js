import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_URI = "mongodb://127.0.0.1:27017/arcades-manhattan";


//process.env.PROD_MONGODB || 
mongoose.set('debug', true)
mongoose.set("returnOriginal", false);

mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );


mongoose.connection.on("disconnected", () =>
  console.log(chalk.bold(`Disconnected from MongoDB!`))
);


mongoose.connection.on("error", (error) =>
  console.error(chalk.red(`MongoDB connection error: ${error}`))
);

export default mongoose.connection;
