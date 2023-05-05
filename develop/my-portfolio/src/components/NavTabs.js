import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {SiVisualstudiocode, SiAboutdotme} from 'react-icons/si';
import {MdOutlineWorkOutline, MdOutlineAlternateEmail} from 'react-icons/md';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
// 
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon = {<AiOutlineHome size="28"/>} text = 'Home' active={currentPage==='Home'} 
        onClick={() => handlePageChange('Home')}/>
      <Divider/>
      {/* <i>About</i> */}
      <SideBarIcon icon = {<SiAboutdotme size="28"/>} text = 'About Me'active={currentPage==='About'} 
        onClick={() => handlePageChange('About')}/>
      {/* <i>Portfolio</i> */}
      <SideBarIcon icon = {<SiVisualstudiocode size="28"/>} text = 'Portfolio' active={currentPage==='Portfolio'} 
        onClick={() => handlePageChange('Portfolio')}/>
      {/* <i>Resume</i> */}
      <SideBarIcon icon = {<MdOutlineWorkOutline size="28"/>} text = 'Resume' active={currentPage==='Resume'} 
        onClick={() => handlePageChange('Resume')}/>
      {/* <i>Contact</i> */}
      <SideBarIcon icon = {<MdOutlineAlternateEmail size="28"/>} text = 'Contact' active={currentPage==='Contact'} 
        onClick={() => handlePageChange('Contact')}/>
    </div>
  );
}

const SideBarIcon = ({icon, text, active, onClick}) => (
  <div className={`sidebar-icon group ${active ? 'bg-gray-700' : ''}`} onClick={onClick}>
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr"/>

export default NavTabs;
