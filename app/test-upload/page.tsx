"use client";
import { useState, useRef } from "react";

export default function TestUpload() {
  const [log, setLog] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const test = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setLog("No file selected.");
      return;
    }

    try {
      setLog("Uploading...");
      const formData = new FormData();
      formData.append("file", file);

      // We explicitly bypass the XHR wrapper in DashboardUI.tsx to test fetch directly
      const res = await fetch("/api/portal/blob-upload", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();
      setLog(`Status: ${res.status}\nResponse: ${text}`);
    } catch (e) {
      setLog(`Exception: ${(e as Error).message}`);
    }
  };

  return (
    <div style={{ padding: "100px", color: "white" }}>
      <h1>Upload Test</h1>
      <input type="file" ref={fileRef} />
      <button onClick={test} style={{ background: "orange", display: "block", marginTop: 20 }}>Upload</button>
      <pre style={{ marginTop: 20, background: "#222", padding: 10 }}>{log}</pre>
    </div>
  );
}
