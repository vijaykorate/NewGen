// src/components/About.jsx
import React from 'react';
import Nav2 from './Nav2';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Nav2 />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-2">
          Welcome to the About Us page! Our company is dedicated to providing the best service possible.
        </p>
        <p className="mb-2">
          We have a rich history of delivering outstanding products and services to our customers. Our team is passionate and driven, always striving to exceed expectations.
        </p>
        <p>
          Thank you for visiting our About Us page. We look forward to serving you and meeting all your needs.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
