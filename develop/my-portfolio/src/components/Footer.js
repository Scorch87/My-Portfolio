import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage, handlePageChange }) {
  return (<footer className='footer'>
    <a href=""
    >Stuff here</a>

  </footer>);
}

export default Footer;
