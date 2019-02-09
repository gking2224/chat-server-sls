const AWS = require('aws-sdk');

const translate = new AWS.Translate();

const getTranslatedText = t => t.TranslatedText;

module.exports = async (text, language) => {
  const params = {
    SourceLanguageCode: language,
    TargetLanguageCode: 'en',
    Text: text,
  };
  return translate.translateText(params).promise().then(getTranslatedText);
};
