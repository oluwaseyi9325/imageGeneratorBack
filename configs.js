const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openaiConfig = new OpenAIApi(configuration);

module.exports={openaiConfig};
