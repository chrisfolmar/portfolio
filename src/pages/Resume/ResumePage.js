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
        <p>This is the resume page content.</p>
      </TextContentBlock>
      {/* Additional components or sections */}
    </div>
  );
};

export default ResumePage;
