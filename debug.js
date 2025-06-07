const { createShapesSDK } = require('shapes-sdk-ts');

// Initialize SDK with API key
const sdk = createShapesSDK({
  apiKey: '<API KEY>',
  debug: { enabled: false }, // set true to enable debugging
});

(async () => {
  try {
    console.log('Fetching profile...');
    const profile = await sdk.getProfile('testuser'); 
    console.log('Profile data:', JSON.stringify(profile, null, 2));
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : String(error));
  }
})();
