const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const cors = require("cors")
const UserRouter = require("./routers/userRouters")

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
app.use(cors());

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log("Database Connected Successfully . . .");
    })
    .catch((err) => {
        console.log("Error Found Can't Connect To Database!");
        console.log(err);
    })

app.use(UserRouter);

app.listen(PORT, () => {
    console.log("Server is running . . .");
})