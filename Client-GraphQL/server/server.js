const express = require("express");
const models = require("./models");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");

// Create a .env file in the root of Client-GraphQL
// Put Database Name & Password there
require("dotenv").config();
const app = express();

function connectDatabase() {
  // Replace with your mongoLab URI
  const MONGO_URI = `mongodb+srv://${process.env.mongoDBName}:${process.env.mongoDBPassword}@cluster0.y7en0.mongodb.net/graphql?retryWrites=true&w=majority`;

  mongoose.Promise = global.Promise;
  mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection
    .once("open", () => console.log("Connected to MongoLab instance."))
    .on("error", (error) =>
      console.log("Error connecting to MongoLab:", error)
    );
}
connectDatabase();

app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
