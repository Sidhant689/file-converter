import React, { useState } from 'react';
import * as bs from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';

const FileConversionModal = ({ show, onHide, conversion }) => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [convertedFile, setConvertedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleRemoveFile = () => {
    setFile(null);
    setProgress(0);
    setConvertedFile(null);
  };

  const handleConvert = async () => {
    if (conversion.name === 'Image to PDF') {
      try {
        const startTime = performance.now(); // Get the start time
  
        const pdfDoc = await PDFDocument.create();
        const imageBytes = await file.arrayBuffer();
        const imageData = await pdfDoc.embedJpg(imageBytes);
        const imagePage = pdfDoc.addPage([imageData.width, imageData.height]);
        imagePage.drawImage(imageData, {
          x: 0,
          y: 0,
          width: imageData.width,
          height: imageData.height,
        });
  
        const pdfBytes = await pdfDoc.save();
        const endTime = performance.now(); // Get the end time
  
        const totalTime = endTime - startTime; // Calculate the total time taken
        let progress = 0;
        const progressInterval = setInterval(() => {
          const elapsedTime = performance.now() - startTime;
          if (elapsedTime >= totalTime) {
            clearInterval(progressInterval);
            progress = 100;
            const convertedFileName = `${file.name.replace(/\.[^/.]+$/, '')}.pdf`;
            const convertedFileBlob = new Blob([pdfBytes], { type: 'application/pdf' });
            const convertedFileUrl = URL.createObjectURL(convertedFileBlob);
            setConvertedFile({ name: convertedFileName, url: convertedFileUrl, timeTaken: totalTime });
          } else {
            progress = Math.floor((elapsedTime / totalTime) * 100);
          }
          setProgress(progress);
        }, 100); // Update progress every 100ms
      } catch (error) {
        console.error('Error converting image to PDF:', error);
      }
    } else {
      // Perform other conversion types
      // ...
    }
  };

  const handleModalClose = () => {
    setFile(null);
    setProgress(0);
    setConvertedFile(null);
    onHide();
  };

  return (
    <bs.Modal show={show} onHide={handleModalClose}>
      <bs.Modal.Header closeButton>
        <bs.Modal.Title>
          {conversion ? conversion.name : 'File Conversion'}
        </bs.Modal.Title>
      </bs.Modal.Header>
      <bs.Modal.Body>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {!file ? (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                border: '2px dashed #ccc',
                borderRadius: '4px',
                height: '200px',
                cursor: 'pointer',
              }}
            >
              {isDragActive ? (
                <p>Drop the file here...</p>
              ) : (
                <p>Drag and drop a file here, or click to select a file</p>
              )}
            </div>
          ) : (
            <div>
              <p>Selected File: {file.name}</p>
              <bs.ProgressBar
                now={progress}
                label={`${progress}%`}
                variant="success"
              />
              <bs.Button variant="danger" onClick={handleRemoveFile}>
                Remove File
              </bs.Button>
              {convertedFile && (
                <div>
                  <p>Converted File: {convertedFile.name}</p>
                  <p>Time Taken: {(convertedFile.timeTaken / 1000).toFixed(2)} seconds</p>
                  <bs.Button
                    variant="primary"
                    href={convertedFile.url}
                    download={convertedFile.name}
                  >
                    Download
                  </bs.Button>
                </div>
              )}
            </div>
          )}
        </div>
      </bs.Modal.Body>
      <bs.Modal.Footer>
        <bs.Button variant="primary" onClick={handleConvert} disabled={!file}>
          Convert
        </bs.Button>
      </bs.Modal.Footer>
    </bs.Modal>
  );
};

export default FileConversionModal;