
const { dynamodb } = require('../lib');

const { roomsSpec, messagesSpec, connectionsSpec } = require('../table-specs');

const createTable = async (params) => {
  await dynamodb.createTable(params).promise()
    .then(() => console.log(`Created '${params.TableName}' table`))
    .catch((e) => {
      if (e.code === 'ResourceInUseException') {
        console.warn(`Table already exists: ${params.TableName}`);
      } else {
        throw e;
      }
    });
};
const createRoomsTable = async () => {
  await createTable(roomsSpec);
};
const createMessagesTable = async () => {
  await createTable(messagesSpec);
};
const createConnectionsTable = async () => {
  await createTable(connectionsSpec);
};

module.exports = async () => Promise.all([
  createMessagesTable(),
  createRoomsTable(),
  createConnectionsTable(),
]);
