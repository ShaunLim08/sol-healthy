import { GoogleAIFileManager } from "@google/generative-ai/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';
import os from 'os';
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

export async function POST(req) {
  const { file } = await req.json();
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);

  // Upload the file and specify a display name.
  // const uploadResponse = await fileManager.uploadFile(file, {
  //   mimeType: "application/pdf",
  //   displayName: "Gemini 1.5 PDF",
  // });
  const model = genAI.getGenerativeModel({
    // Choose a Gemini model.
    model: "gemini-1.5-pro",
    safety_settings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_UNSPECIFIED,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        }
      ]
  });

  const modifiedFiles = await Promise.all(file.map(async (f) => {
    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, f.name);

    // Convert base64 to buffer and write to temp file
    const buffer = Buffer.from(f.content, 'base64');
    fs.writeFileSync(tempFilePath, buffer);

    try {
      const uploadResponse = await fileManager.uploadFile(tempFilePath, {
        mimeType: f.type,
        displayName: f.name,
      });

      console.log(uploadResponse);

      return {
        fileData: {
          mimeType: uploadResponse.file.mimeType,
          fileUri: uploadResponse.file.uri,
        },
      };
    } finally {
      // Clean up: delete the temporary file
      fs.unlinkSync(tempFilePath);
    }
  }));

  // Generate content using text and the URI reference for the uploaded file.
//   const result = await model.generateContent([
//     ...modifiedFiles,
//     {
//       text: "According to file. Guess the Name of medicine, Generate Batch number, Supplier and Status (Verified, Pending Verification, Counterfeit Detected) of the medicine in one JSON of {name: string, batch_number: string, supplier: string, status: string}.",
//     },
//   ]);
//   console.log(result.response.text());

  // View the response.
  // console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);
//   return Response.json(result.response.text());
  return Response.json({
    "name": "Dasselta",
    "batch_number": "DC5736",
    "supplier": "KRKA",
    "status": "Verified",
    "imageUrl": modifiedFiles[0].fileData.fileUri
  });
}
