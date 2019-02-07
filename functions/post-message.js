const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const generateRandomId = require('../lib/generate-random-id');
const getLanguage = require('../lib/get-language');
const translateToEnglish = require('../lib/translate-to-english');

const TableName = process.env.messages_table;

const validatePayload = (body) => {
  if (!body) throw new Error('payload is missing');
  if (typeof body !== 'string') throw new Error('body is not a string');
  const parsed = JSON.parse(body);
  if (typeof parsed !== 'object') throw new Error('body is not an object');
  if (parsed.message === undefined) throw new Error('body is missing \'message\' attribute');
  return parsed;
};

module.exports.handler = async (event, context) => {
  try {

    const { message } = validatePayload(event.body);

    const language = await getLanguage(message);

    const Item = {
      messageId: generateRandomId(),
      message,
      language
    }

    if (language !== 'en') {
      Item.translation = await translateToEnglish(message, language);
    }
    const req = {
      TableName,
      Item
    };
    const resp = await dynamodb.put(req).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(Item),
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
        error: e
      })
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    }
  }
}
