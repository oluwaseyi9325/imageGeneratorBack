const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.key,
});
const openaiConfig = new OpenAIApi(configuration);

module.exports={openaiConfig};
