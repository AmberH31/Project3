const express = require("express");
const mongoose = require("mongoose");
// const router = require("./router");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/bulid"));
}

// app.use(router);

mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/project3_db",
  { useNewUrlParser: true }
);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
