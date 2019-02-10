export default {
  MessagesTable: process.env.messages_table as string,
  ConnectionsTable: process.env.connections_table as string,
  RoomsTable: process.env.rooms_table as string,
  DynamoDbEndpoint: process.env.dynamo_db_endpoint as string
}
