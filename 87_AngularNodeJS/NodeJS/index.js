const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/rutas");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", route);
app.use(express.static(process.cwd() + "/public"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
