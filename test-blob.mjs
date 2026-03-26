import { put } from "@vercel/blob";
import fs from "fs";

async function run() {
  try {
    const file = fs.readFileSync("test-upload.txt");
    const u = await put("test.txt", file, { 
      access: "public", // Using public for testing since the API route uses private
      token: process.env.BLOB_READ_WRITE_TOKEN
    });
    console.log("OK:", u.url);
  } catch(e) {
    console.error("ERR:", e.message);
  }
}

run();
