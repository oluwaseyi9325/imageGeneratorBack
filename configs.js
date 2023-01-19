const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openaiConfig = new OpenAIApi(configuration);

module.exports={openaiConfig};
