
import React from 'react';
import Nav2 from './Nav2';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <Nav2 />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-2">
          We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <p className="mb-2">
          You can reach us at:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: <a href="mailto:info@yourcompany.com" className="text-blue-500">info@yourcompany.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 234 567 890</a></li>
        </ul>
        <p>
          Our office is open from 9 AM to 5 PM, Monday to Friday.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
