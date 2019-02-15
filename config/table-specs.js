
module.exports.roomsSpec = {
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
module.exports.messagesSpec = {
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
module.exports.connectionsSpec = {
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
