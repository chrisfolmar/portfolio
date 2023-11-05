// File: src/pages/Home/HomePage.js

import React from 'react';
import Header from '../../components/Header/Header';
import TextContentBlock from '../../components/TextContentBlock/TextContentBlock';
import Slider from '../../components/Slider/Slider';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <TextContentBlock>
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hi, I'm John Doe, a passionate and results-driven software engineer with 5+ years of experience in building web applications. I specialize in React and Ruby on Rails development.
        </p>
        <p>
          I love creating beautiful and intuitive user interfaces that provide seamless user experiences. With a strong foundation in software engineering principles, I am capable of designing and implementing scalable and maintainable solutions.
        </p>
        <p>
          Browse through my portfolio and check out my projects to get a glimpse of my skills and expertise. Feel free to get in touch with me for collaboration or job opportunities.
        </p>
      </TextContentBlock>
      <Slider>
        {/* Slider content goes here */}
      </Slider>
    </div>
  );
};

export default HomePage;
