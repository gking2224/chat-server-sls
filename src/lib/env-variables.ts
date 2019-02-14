
export default {
  ConnectionsTable: process.env.CONNECTIONS_TABLE as string,
  CorsOrigins: process.env.CORS_ORIGINS || '',
  DynamoDbEndpoint: !!process.env.DYNAMO_DB_ENDPOINT ? process.env.DYNAMO_DB_ENDPOINT : undefined,
  MessagesTable: process.env.MESSAGES_TABLE as string,
  RoomsTable: process.env.ROOMS_TABLE as string,
};
