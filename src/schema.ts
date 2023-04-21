import {
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
	GraphQLSchema,
} from "graphql";

const rootQuery: GraphQLObjectType = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		data: {
			type: GraphQLString,
			resolve() {
				return "hello, world!";
			},
		},
	},
});

export default new GraphQLSchema({ query: rootQuery });
