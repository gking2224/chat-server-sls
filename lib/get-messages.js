const AWS = require('aws-sdk');

const TableName = process.env.messages_table;

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = async (room) => { // eslint-disable-line no-unused-vars
  console.log('get-messages', TableName);
  const req = {
    TableName,
    Limit: 10,
  };
  try {
    const resp = await dynamodb.scan(req).promise()
      .catch((e) => {
        console.error(e);
        return ({ Items: [] });
      })
      .then((r) => {
        console.log('db response', r);
        return r;
      });
    return resp.Items;
  } catch (e) {
    console.error(e);
    return [];
  }
};
