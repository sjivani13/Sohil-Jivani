import "dotenv/config";
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import keys from './config/keys'
import { port } from "./config/keys";
import router from "./routes"


mongoose.connect(keys.database.url)
    .then(() => console.log("[Database] Connection established."))
    .catch((err) => console.log("[Database] Connection failed: ", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(keys.app.apiEndpoint, router);

app.listen(port.web, () => console.log(`[Server] Listening for requests at http://localhost:${port.web}`))
