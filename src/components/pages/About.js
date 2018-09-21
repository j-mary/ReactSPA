import React from 'react';

const About = () => {
  const today = new Date().getFullYear();

  return (
    <div>
      <div className="display-4">React SPA</div>
      <p>A simple React Single Page Application</p>
      <p>version 1.0.0 - &copy;Copyright {today}</p>
    </div>
  );
};

export default About;
