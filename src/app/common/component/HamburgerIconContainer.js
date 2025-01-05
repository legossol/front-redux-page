import React, { useState } from 'react';
import './../style/HamburgerIcon.css'; // 햄버거 아이콘 스타일링

const HamburgerIconContainer = ({ showSideBarMenu }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = () => {
    setIsSidebarOpen(prevState => !prevState);
    showSideBarMenu();  // 상위 컴포넌트로 상태를 전달
  };

  return (
    <div className="hamburger-icon-container" onClick={handleClick}>
      <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default HamburgerIconContainer;
