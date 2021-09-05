import React, { useState } from "react";
import pdfFile from "../../assets/resume/Resume083121.pdf";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./Resume.scss";

export default function Resume() {
  const [defaultPdfFile] = useState(pdfFile);

  return (
    <div className="pdfContainer">
      {defaultPdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
            <div style={{ height: "750px" }}>
              <Viewer fileUrl="/path/to/document.pdf" />
            </div>
          </Worker>
        </>
      )}
    </div>
  );
}
