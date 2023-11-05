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
        <p>
          Let's connect and discuss how we can work together. You can reach out to me via email or phone, and I'll get back to you as soon as possible.
        </p>
        <p>
          Email: john.doe@example.com
        </p>
        <p>
          Phone: +1 (123) 456-7890
        </p>
      </TextContentBlock>
    </div>
  );
};

export default ContactPage;
