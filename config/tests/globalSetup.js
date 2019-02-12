
const { dynamodb } = require('./lib');

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
  const roomsSpec = {
    TableName: process.env.ROOMS_TABLE,
    AttributeDefinitions: [
      {
        AttributeName: 'room',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'room',
        KeyType: 'HASH',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };
  await createTable(roomsSpec);
};
const createMessagesTable = async () => {
  const roomsSpec = {
    TableName: process.env.MESSAGES_TABLE,
    AttributeDefinitions: [
      {
        AttributeName: 'messageId',
        AttributeType: 'S',
      },
      {
        AttributeName: 'room',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'messageId',
        KeyType: 'HASH',
      },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: 'roomIdx',
        KeySchema: [
          {
            AttributeName: 'room',
            KeyType: 'HASH',
          },
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };
  await createTable(roomsSpec);
};
const createConnectionsTable = async () => {
  const roomsSpec = {
    TableName: process.env.CONNECTIONS_TABLE,
    AttributeDefinitions: [
      {
        AttributeName: 'connectionId',
        AttributeType: 'S',
      },
      {
        AttributeName: 'room',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'connectionId',
        KeyType: 'HASH',
      },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: 'roomIdx',
        KeySchema: [
          {
            AttributeName: 'room',
            KeyType: 'HASH',
          },
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };
  await createTable(roomsSpec);
};

module.exports = async () => Promise.all([
  createMessagesTable(),
  createRoomsTable(),
  createConnectionsTable(),
]);
