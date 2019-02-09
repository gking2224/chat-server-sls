const AWS = require('aws-sdk');

const comprehend = new AWS.Comprehend();

const pickLanguage = ({ Languages }) =>
  Languages.reduce((chosen, lang) => ((lang.Score > chosen.Score) ? lang : chosen), { Score: 0 }).LanguageCode;

module.exports = async text => comprehend.detectDominantLanguage({
  Text: text,
}).promise()
  .then(pickLanguage);
