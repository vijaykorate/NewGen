import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">Phone: +91 456 7890</li>
            <li className="mb-2">Email: info@example.com</li>
            <li className="mb-2">Fax: +91 456 7891</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-bold mb-4">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
              <input 
                className="w-full px-3 py-2 text-gray-800 rounded-md"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input 
                className="w-full px-3 py-2 text-gray-800 rounded-md"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <button 
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>

 
        <div>
          <h3 className="text-lg font-bold mb-4">Our Address</h3>
          <p>1234 Street Name</p>
          <p>City, State, 12345</p>
          <p>Country</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
