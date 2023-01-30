import React from "react";
import './../container/Sidebar.css'

const Sidebar = () =>{
    const menuTrigger = document.querySelector('.menu-trigger');

    menuTrigger.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active-1');
    });

    return(
        <div>
            <a class="menu-trigger" href="#">
            <span></span>
            <span></span>
            <span></span>
            </a>
        </div>
    )
}
export default Sidebar;