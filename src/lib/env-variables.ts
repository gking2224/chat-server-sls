export default {
  MessagesTable: process.env.messages_table as string,
  ConnectionsTable: process.env.connections_table as string,
  RoomsTable: process.env.ROOMS_TABLE as string,
  DynamoDbEndpoint: !!process.env.DYNAMO_DB_ENDPOINT ? process.env.DYNAMO_DB_ENDPOINT : undefined
}
