import { createShapesSDK, SDKOptions } from 'shapes-sdk-ts';

async function main() {
  const options: SDKOptions = { apiKey: 'your<api>key' };
  const sdk = createShapesSDK(options);

  try {
    const response = await sdk.sendMessage("Hello", "shapesinc/bidya");
    console.log("Response:", response);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

main();
