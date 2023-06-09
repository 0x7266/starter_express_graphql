import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
const app = express();

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen(3333, () => {
	console.log("Listening on port 3333");
});
