const { createShapesSDK } = require('shapes-sdk-ts');
// Initialize the SDK with your API key
const sdk = createShapesSDK({ apiKey: '<YOUR_API_KEY>' });
/**
 * Send a text message using the Shapes SDK.
 */
async function sendMessage(message, model = "shapesinc/bidya") { // Here input yor model name
  const response = await sdk.sendMessage(message, model);
  console.log("sendMessage response:", response);
  return response;
}
/**
 * Analyze an audio file using the Shapes SDK.
 */
// Usage example
(async () => {
  await sendMessage("hello what is your name?");
})();

