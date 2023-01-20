const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.mykey,
});
const openaiConfig = new OpenAIApi(configuration);

module.exports={openaiConfig};
