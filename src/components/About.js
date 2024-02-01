// About.js
import React from "react";

const About = ({ image, aboutText }) => {
  const defaultImage = "https://via.placeholder.com/215";
  
  // Use the prop if provided, otherwise use the default image
  const imageUrl = image ? image : defaultImage;

  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;

