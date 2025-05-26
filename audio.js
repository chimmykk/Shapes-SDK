const { createShapesSDK } = require("shapes-sdk-ts");

async function run() {
  const sdk = createShapesSDK({ apiKey: "HiocgM0BiVRdy7Dy0dWYdw7GWF4KfUId22TpN90yyuo" });

  const audioPath = "./assetexample/MATH.mp3";
  console.log("Analyzing audio file:", audioPath);

  try {
    const response = await sdk.analyzeAudio(audioPath, "shapesinc/tenshi");
    if (response === null) {
      console.log("No response received from analyzeAudio.");
    } else {
      console.log("Response:", JSON.stringify(response, null, 2));
    }
  } catch (error) {
    console.error("Error during analyzeAudio:", error);
  }
}

run();
