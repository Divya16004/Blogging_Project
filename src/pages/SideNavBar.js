import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import ColorPalette from './ColorPalette';

const SideNavBar = ({ toggleMode, onSelectColor, buttonColor }) => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add");
  };

  return (
    <div className="w-14 h-screen bg-black">
      <div className="flex-grow md:flex-grow-0 mb-4 md:mb-0 md:mr-4">
        <ColorPalette onSelectColor={onSelectColor} />
      </div>
      <div className="m-2">
        <div className="my-2 w-8 h-8 rounded-full p-1 cursor-pointer" onClick={handleClick} style={{ backgroundColor: buttonColor }}>
          <img className="w-8 h-6" src="images/add.png" alt="Add" />
        </div>
        <div onClick={toggleMode} className="my-2 w-9 h-9 rounded-full p-1 cursor-pointer" style={{ backgroundColor: buttonColor }}>
          <img src="images/theme.png" alt="Toggle Mode" />
        </div>
      </div>
     
    </div>
  );
};

export default SideNavBar;