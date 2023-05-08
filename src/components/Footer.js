import React from 'react';
import {FiGithub} from 'react-icons/fi';
import {SlSocialLinkedin} from 'react-icons/sl';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

// GitHub, LinkedIn, 3rd Platform?
function Footer({ currentPage, handlePageChange }) {
  return (
  
    <footer className="fixed bottom-0 w-screen bg-gray-900 py-4 mt-auto">
      <div className="container mx-auto flex flex-row justify-center space-x-4"> 
        <FooterIcon icon={<a href="https://github.com/Scorch87"><FiGithub size = "28"/></a>} text = "GitHub"/>
        <FooterIcon icon={<a href="https://www.linkedin.com/feed/"><SlSocialLinkedin size = "28"/></a>} text = "LinkedIn"/>
      </div>
    </footer>
    
  );
}

const FooterIcon = ({icon, text, active, onClick}) => (
  <div className={`footer-icon group ${active ? 'bg-gray-700' : ''}`} onClick={onClick}>
    {icon}
    <span className="footer-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

export default Footer;
