const express = require("express");
const { graphqlHTTP } = require("express-graphql"); // This library is a glue-layer between express server and graphQL
const schema = require("./schema/schema");

const app = express();

// here we are setting up a middleware, that all the requests with endpoint 'graphql',
// will be dealt by graphqlHTTP.
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening at 4000");
});
