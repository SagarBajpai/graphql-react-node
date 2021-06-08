// A GraphQL schema
const graphql = require("graphql");
const axios = require("axios");

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const CompanyType = new GraphQLObjectType({
  name: "Companies",
  fields: {
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  },
});

// Schema for a User
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then((response) => response.data);
      },
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } }, // If you're looking for User with some id, it will points to UserType Schema
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then((response) => response.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
