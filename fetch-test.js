const fs = require('fs');

async function testUpload() {
  try {
    const formData = new FormData();
    formData.append('file', new Blob([fs.readFileSync('test-upload.txt')]), 'test-upload.txt');

    const response = await fetch('http://localhost:3000/api/portal/blob-upload', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    console.log("STATUS:", response.status);
    console.dir(data, { depth: null });
  } catch (err) {
    console.error("FETCH ERROR:", err);
  }
}

testUpload();
