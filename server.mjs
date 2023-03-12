import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv/config');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

const Database = require("./src/modules/database/Database");
const DB = new Database();

const { ENDPOINTS } = require("./src/types/auth");
const authRoute = require("./src/modules/routes/auth");
const userRoute = require("./src/modules/routes/user");
const mailRoute = require('./src/modules/routes/mail')
// Route middleware
app.use(ENDPOINTS.prefix.auth, authRoute);
app.use(ENDPOINTS.prefix.normal, userRoute);
app.use(ENDPOINTS.prefix.normal, mailRoute);
//- apies
app.get("/", (req, res) => {
    res.send({ health: true });
});

//-----------
const multer = require('multer')

const Storage = multer.diskStorage({
    destination: './storage/',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({
    storage: Storage
}).single('file')

app.post('/img', upload, (req, res) => {
    console.log(req.body.file)
    res.send('ss')
})





//--
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server has started on port ${"http://localhost:" + port}`);
    DB.connect();
});
