import React from 'react';
import Button from 'react-bootstrap/Button';
import Pdf from '../assets/resume-shubham.pdf'; 
function ResumeButtons() {
//   const pdfUrl = '../assets/resume-shubham.pdf'; // Place your PDF in the public folder

  return (
    <div className="d-flex gap-3">
      {/* View Button */}
      <Button
        variant="primary"
        href={Pdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </Button>

      {/* Download Button */}
      <Button
        variant="success"
        href={Pdf}
        download
      >
        Download Resume
      </Button>
    </div>
  );
}

export default ResumeButtons;
