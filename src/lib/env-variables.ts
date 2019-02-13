
export default {
  MessagesTable: process.env.MESSAGES_TABLE as string,
  ConnectionsTable: process.env.CONNECTIONS_TABLE as string,
  RoomsTable: process.env.ROOMS_TABLE as string,
  DynamoDbEndpoint: !!process.env.DYNAMO_DB_ENDPOINT ? process.env.DYNAMO_DB_ENDPOINT : undefined,
  CorsOrigins: process.env.CORS_ORIGINS || ''
}
