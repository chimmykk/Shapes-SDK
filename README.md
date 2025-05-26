# Shapes SDK TypeScript

A TypeScript/JavaScript SDK for interacting with the Shapes AI API. This SDK provides easy-to-use methods for sending messages, analyzing audio files, and analyzing images using various AI models.

## Features

- 🤖 **Text Chat**: Send text messages to AI models
- 🎵 **Audio Analysis**: Transcribe and analyze audio files (MP3, WAV, OGG, M4A)
- 🖼️ **Image Analysis**: Analyze and describe images
- 🔧 **Flexible Authentication**: Support for API keys or App ID/Auth Token pairs
- 📦 **TypeScript Support**: Full TypeScript support with type definitions
- 🎯 **Model Selection**: Easy model switching with proxy-based API

## Installation

```bash
npm install shapes-sdk-ts
```

## Quick Start

### Initialize the SDK

```javascript
const { createShapesSDK } = require('shapes-sdk-ts');

// Option 1: Using API Key
const sdk = createShapesSDK({
  apiKey: 'your_api_key_here'
});

// Option 2: Using App ID and Auth Token
const sdk = createShapesSDK({
  appId: 'your_app_id_here',
  authToken: 'your_auth_token_here'
});
```

## API Reference

### Configuration Options

```typescript
interface SDKOptions {
  apiKey?: string;        // Your Shapes API key
  appId?: string;         // Your application ID
  authToken?: string;     // Your authentication token
  baseUrl?: string;       // Custom API base URL (default: 'https://api.shapes.inc/v1')
}
```

### Text Messaging

Send text messages to AI models and get responses.

```javascript
// Basic usage
const response = await sdk.sendMessage("Hello, what is your name?");
console.log(response);

// With specific model
const response = await sdk.sendMessage("Hello!", "shapesinc/bidya");

// Using model proxy for cleaner syntax
const response = await sdk.sendMessage.model["shapesinc/bidya"]("Hello!");
```


### Header  UserID<>ChannelID
```

import { createShapesSDK, SDKOptions } from 'shapes-sdk-ts';

async function main() {
  const options: SDKOptions = { apiKey: '' };
  const sdk = createShapesSDK(options);

  const values = {
    userId: 'user-123',
    channelId: 'channel-abc'
  };

  const headers: Record<string, string> = {};
  if (values.userId) {
    headers["X-User-Id"] = values.userId;
  }
  if (values.channelId) {
    headers["X-Channel-Id"] = values.channelId;
  }

  try {
    const response = await sdk.sendMessage("Hello", "shapesinc/tenshi");
    console.log("Response:", response);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

main();
```

**Supported Content Types:**
- Plain text strings
- Structured content objects with `type: "text"`
- Audio content objects with `type: "audio"`

### Audio Analysis

Analyze and transcribe audio files in various formats.

```javascript
// Basic audio analysis
const audioPath = "./audio/sample.mp3";
const response = await sdk.analyzeAudio(audioPath);
console.log(response);

// With specific model
const response = await sdk.analyzeAudio(audioPath, "Custom prompt", "shapesinc/tenshi");

// Using model proxy
const response = await sdk.analyzeAudio.model["shapesinc/tenshi"](audioPath, "Custom prompt");
```

**Supported Audio Formats:**
- MP3 (`.mp3`) - `audio/mpeg`
- WAV (`.wav`) - `audio/wav`
- OGG (`.ogg`) - `audio/ogg`
- M4A (`.m4a`) - `audio/mp4`

### Image Analysis

Analyze and describe images using AI vision models.

```javascript
// Basic image analysis
const imagePath = "./images/sample.jpg";
const response = await sdk.analyzeImage(imagePath);
console.log(response);

// With custom prompt
const response = await sdk.analyzeImage(
  imagePath, 
  "Describe the objects and people in this image in detail."
);

// With specific model
const response = await sdk.analyzeImage(imagePath, "What's in this image?", "shapesinc/tenshi");

// Using model proxy
const response = await sdk.analyzeImage.model["shapesinc/tenshi"](imagePath, "Analyze this image");
```

## Usage Examples

### Complete Example: Text Chat

```javascript
const { createShapesSDK } = require('shapes-sdk-ts');

const sdk = createShapesSDK({
  apiKey: 'your_api_key_here'
});

async function chatExample() {
  try {
    const response = await sdk.sendMessage("Hello, what is your name?", "shapesinc/bidya");
    console.log("AI Response:", response);
  } catch (error) {
    console.error("Error:", error);
  }
}

chatExample();
```

### Complete Example: Audio Analysis

```javascript
const { createShapesSDK } = require('shapes-sdk-ts');

const sdk = createShapesSDK({
  apiKey: 'your_api_key_here'
});

async function analyzeAudioExample() {
  try {
    const audioPath = "./assets/audio.mp3";
    const response = await sdk.analyzeAudio(
      audioPath, 
      "Please transcribe and respond to this audio message.",
      "shapesinc/tenshi"
    );
    
    if (response === null) {
      console.log("No response received from analyzeAudio.");
    } else {
      console.log("Transcription:", response);
    }
  } catch (error) {
    console.error("Error during audio analysis:", error);
  }
}

analyzeAudioExample();
```

### Complete Example: Image Analysis

```javascript
const { createShapesSDK } = require('shapes-sdk-ts');

const sdk = createShapesSDK({
  apiKey: 'your_api_key_here'
});

async function analyzeImageExample() {
  try {
    const imagePath = "./assets/image.jpg";
    const prompt = "What objects and text can you see in this image?";
    
    const response = await sdk.analyzeImage(imagePath, prompt);
    
    if (response === null) {
      console.log("No response received from analyzeImage.");
    } else {
      console.log("Image analysis:", response);
    }
  } catch (error) {
    console.error("Error analyzing image:", error);
  }
}

analyzeImageExample();
```

### Using App ID and Auth Token

```javascript
const { createShapesSDK } = require('shapes-sdk-ts');

const sdk = createShapesSDK({
  appId: 'f6263f80-2242-428d-acd4-10e1feec44ee',
  authToken: 'your_auth_token_here'
});

async function authenticatedRequest() {
  const response = await sdk.sendMessage("Hello!", "shapesinc/bidya");
  console.log("Response:", response);
}

authenticatedRequest();
```

## Available Models

The SDK supports various AI models. Common models include:

- `shapesinc/tenshi` - General model 
- `shapesinc/shaperobot` - Default chat model
- `call any mode ` - sdk.sendMessage("Hello", "shapesinc/{modename}")`

You can specify models in three ways:

1. **As a parameter**: `sdk.sendMessage("Hello", "shapesinc/bidya")`
2. **Using model proxy**: `sdk.sendMessage.model["shapesinc/bidya"]("Hello")`
3. **Default model**: Each method has a default model if none is specified

## Error Handling

The SDK includes built-in error handling for common scenarios:

```javascript
try {
  const response = await sdk.analyzeAudio("./nonexistent.mp3");
} catch (error) {
  if (error.message.includes('Unsupported audio format')) {
    console.error("Please use MP3, WAV, OGG, or M4A files");
  } else if (error.code === 'ENOENT') {
    console.error("Audio file not found");
  } else {
    console.error("API Error:", error);
  }
}
```

## TypeScript Support

The SDK is fully typed for TypeScript projects:

```typescript
import { createShapesSDK, SDKOptions } from 'shapes-sdk-ts';

const options: SDKOptions = {
  apiKey: 'your_api_key_here',
  baseUrl: 'https://api.shapes.inc/v1'
};

const sdk = createShapesSDK(options);

// All methods return Promise<string>
const response: string = await sdk.sendMessage("Hello!");
```

## Requirements

- Node.js 14+ or modern browser environment
- Valid Shapes API credentials (API key or App ID/Auth Token pair)


## License

MIT License - see LICENSE file for details
