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
        <p>This is the home page content.</p>
      </TextContentBlock>
      <Slider>
        {/* Slider content goes here */}
      </Slider>
      {/* Additional components or sections */}
    </div>
  );
};

export default HomePage;
