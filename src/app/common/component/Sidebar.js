import React from 'react';
import './../style/Sidebar.css';

const Sidebar = ({isSidebarOpen }) =>{

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/board">게시판</a></li>
            <li><a href="/support">1:1 문의</a></li>
          </ul>
        </div>
      );
}
export default Sidebar;