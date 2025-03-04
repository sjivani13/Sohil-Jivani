import "dotenv/config";
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import keys from './config/keys'
import { port } from "./config/keys";
import router from "./routes";
import fileUpload from 'express-fileupload';
import path from "path";

//mongoose.connect(keys.database.url)
//  .then(() => console.log("[Database] Connection established."))
//.catch((err) => console.log("[Database] Connection failed: ", err));
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(keys.database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(keys.app.apiEndpoint, router);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/dist")))
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../../client/dist/index.html"))
  })
}

app.listen(port.web, () => console.log(`[Server] Listening for 
requests at http://localhost:${port.web}`))
