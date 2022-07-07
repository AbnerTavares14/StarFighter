import express from "express";
import "express-async-errors";
import cors from 'cors';
import router from "./src/routers/index.js";
import handleErrorsMiddleware from "./src/middlewares/handleErrorsMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrorsMiddleware)

app.listen(3000, () => {
    console.log("Server running in " + 3000)
});



//npx tsc -init