const { createShapesSDK } = require('shapes-sdk-ts');

const APP_ID ='f6263f80-2242-428d-acd4-10e1feec44ee';
const AUTH_TOKEN ='your_auth_token_here';
const sdk = createShapesSDK({
  appId: APP_ID,
  authToken: AUTH_TOKEN,
});

/**
 * Send a text message using the Shapes SDK.
 */
async function sendMessage(message, model = "shapesinc/bidya") {
  const response = await sdk.sendMessage(message, model);
  console.log("sendMessage response:", response);
  return response;
}

/**
 */
// Usage example
(async () => {
  await sendMessage("hello what is your name?");
})();
