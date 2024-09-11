import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mocks } from "./mocks";

const logger = console.log;

const startApolloServer = async (): Promise<void> => {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);

  logger(`Server is live at ${url}`);
};

const StartServer = async () => {
  try {
    await startApolloServer();
  } catch (error) {
    logger("Error starting server:", error);
  }
};

StartServer();
