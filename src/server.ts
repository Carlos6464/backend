import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors"
import router from "./router";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof Error){
        return res.status(400).json({
            error: error.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(port, () => {
    console.log("Servidor Online!");
})
