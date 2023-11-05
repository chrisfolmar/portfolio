// pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="welcome-section">
        {/* Welcome message and introduction paragraph */}
      </section>
      <section className="skills-section">
        {/* Technical skills section */}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
