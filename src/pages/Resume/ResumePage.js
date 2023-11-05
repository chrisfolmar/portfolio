// File: src/pages/Resume/ResumePage.js

import React from 'react';
import Header from '../../components/Header/Header';
import TextContentBlock from '../../components/TextContentBlock/TextContentBlock';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <Header />
      <TextContentBlock>
        <h2>My Resume</h2>
        <p>
          Please find attached my resume for more details about my education, work experience, and technical skills. If you have any questions or would like to know more, feel free to contact me.
        </p>
        <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </TextContentBlock>
    </div>
  );
};

export default ResumePage;
