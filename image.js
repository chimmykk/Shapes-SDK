const { createShapesSDK } = require("shapes-sdk-ts");
/**
 * Analyze an image using the Shapes SDK.
 * @param {string} imagePath - The path to the image file.
 * @param {string} prompt - The prompt for the image analysis.
 * @returns {Promise<Object>} The response from the Shapes SDK.
 */
async function main() {     
    // Initialize the SDK with your API key
  const sdk = createShapesSDK({
    apiKey: "<YOUR_API_KEY> ",
  });
  try {
    const imagePath = "/assetexample/MATH.mp3";
    const prompt = "What is in this image?";
    // Analyze the image using the Shapes SDK
    const response = await sdk.analyzeImage(imagePath, prompt);
    if (response === null) {
      console.log("No response received from analyzeImage.");
    } else {
      console.log("Image analysis response:", response);
    }
  } catch (error) {
    console.error("Error analyzing image:", error);
  }
}
main();
