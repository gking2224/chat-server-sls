const AWS = require('aws-sdk');

const TableName = process.env.messages_table;

const dynamodb = new AWS.DynamoDB.DocumentClient();
const generateRandomId = require('../lib/generate-random-id');
const getLanguage = require('../lib/get-language');
const translateToEnglish = require('../lib/translate-to-english');

module.exports = async ({ message, author, room }) => {
  const language = await getLanguage(message);

  const Item = {
    messageId: generateRandomId(),
    message,
    room,
    author,
    language,
  };

  if (language !== 'en') {
    Item.translation = await translateToEnglish(message, language);
  }
  const req = {
    TableName,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
