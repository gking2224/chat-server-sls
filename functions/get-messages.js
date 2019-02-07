const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const TableName = process.env.messages_table;

module.exports.handler = async (event, context) => { // eslint-disable-line no-unused-vars
  const req = {
    TableName,
    Limit: 10,
  };
  try {
    const resp = await dynamodb.scan(req).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({
        messages: resp.Items,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: e.message,
        error: e,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  }
};
