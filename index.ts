import express from "express";
import cors from 'cors';
import router from "./src/routers/index.js";
import handleErrorsMiddleware from "./src/middlewares/handleErrorsMiddleware.js";
import "express-async-errors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrorsMiddleware)

app.listen(5000);



//npx tsc -init