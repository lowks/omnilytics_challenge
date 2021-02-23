const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/routes")();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

module.exports = app;
