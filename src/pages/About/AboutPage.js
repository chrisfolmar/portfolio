// File: src/pages/About/AboutPage.js

import React from 'react';
import Header from '../../components/Header/Header';
import TextContentBlock from '../../components/TextContentBlock/TextContentBlock';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <TextContentBlock>
        <h2>About Me</h2>
        <p>This is the about page content.</p>
      </TextContentBlock>
      {/* Additional components or sections */}
    </div>
  );
};

export default AboutPage;
