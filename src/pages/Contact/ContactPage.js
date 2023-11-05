// File: src/pages/Contact/ContactPage.js

import React from 'react';
import Header from '../../components/Header/Header';
import TextContentBlock from '../../components/TextContentBlock/TextContentBlock';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <TextContentBlock>
        <h2>Contact Me</h2>
        <p>This is the contact page content.</p>
      </TextContentBlock>
      {/* Additional components or sections */}
    </div>
  );
};

export default ContactPage;
