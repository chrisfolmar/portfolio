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
        <p>
          Hi, I'm John Doe, a software engineer based in XYZ City. I have a strong passion for building web applications that make a positive impact on people's lives.
        </p>
        <p>
          I graduated with a degree in Computer Science and have since been working on various projects, gaining valuable experience in frontend and backend development.
        </p>
        <p>
          My technical skills include JavaScript, React, Ruby on Rails, HTML/CSS, and SQL. I am always eager to learn new technologies and stay up-to-date with industry trends.
        </p>
        <p>
          When I'm not coding, you can find me exploring the outdoors, playing guitar, or enjoying a good book. I believe that a balance between work and personal interests is essential for overall well-being.
        </p>
      </TextContentBlock>
    </div>
  );
};

export default AboutPage;
