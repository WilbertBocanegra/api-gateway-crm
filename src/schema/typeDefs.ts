import { DocumentNode } from "graphql";
import { loadFiles } from "graphql-import-files";

const typeDefs: DocumentNode = loadFiles("**/graphql/**/*.gql");

export default typeDefs;
