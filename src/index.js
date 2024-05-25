import app from './app.js';
import { config} from "dotenv";
config({ path: process.ENV })
import dbConnect from './db.js';
app.listen(3003,() => {
    console.log("Servidor arrancado en:http://localhost/3003")
})
dbConnect()