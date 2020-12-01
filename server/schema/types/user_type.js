const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

// for the user type, we only add the email because we don't need to associate the password in graphql at any point
const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }
});

module.exports = UserType;
