const AWS = require('aws-sdk');
var comprehend = new AWS.Comprehend();

const pickLanguage = ({ Languages }) => {
  return Languages.reduce((chosen, lang) => {
    return (lang.Score > chosen.Score) ? lang : chosen
  }, { Score: 0 }).LanguageCode;
};
module.exports = async (text) => {
  return comprehend.detectDominantLanguage({
    Text: text
  }).promise()
    .then(pickLanguage);
}
