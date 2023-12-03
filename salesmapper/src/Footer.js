// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-black text-center py-3">
      <div className="container">
        <span>&copy; {new Date().getFullYear()} Automated Sales Mapper. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
