import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 작동중입니다.`)
})

export default app;