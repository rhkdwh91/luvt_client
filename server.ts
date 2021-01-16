import express from "express";
import next from "next";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
// 환경변수 설정(dotenv 라이브러리 사용)
import env from "./config/env";

console.log(env.API_URL);
console.log(env);
console.log(process.env.NODE_ENV);
//const dev:boolean = process.env.NODE_ENV !== "production";
let nextApp;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    nextApp =  next({ dev: false });
} else if (process.env.NODE_ENV === 'development') {
    nextApp = next({ dev: true });
}
const handle = nextApp.getRequestHandler()

const config = require("./config");

nextApp.prepare().then(() => {
    const app = express();
    // view engine setup
    if (process.env.NODE_ENV === "production") {
        app.use(morgan("combined"));
    } else {
        // development
        app.use(morgan("dev"));
    }
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(
        cors({
        exposedHeaders: config.corsHeaders,
        })
    );
    app.get('*', (req, res) => {
        return handle(req, res)
      })

    const reversePort = 3000;
    app.listen(reversePort, () => {
        console.log("next+expresss running on port 3000");
    });
});
