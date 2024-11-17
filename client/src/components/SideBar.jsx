import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="sticky top-0 z-50 flex">
      <div className="drawer lg:drawer-open lg:w-[15%]">
        <input 
          id="my-drawer-3" 
          type="checkbox" 
          className="drawer-toggle" 
          checked={isSidebarOpen} 
          onChange={toggleSidebar}
        /> 
        {/* <div className="hidden lg:visible">
          <div className="drawer-side">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li><a>Sidebar Item 2</a></li>
              </ul>
            </div>
        </div> */}
        <div className="drawer-content flex flex-col lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-black">
              <AiOutlineMenu size={30}/>
            </label>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay" onClick={toggleSidebar}></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {/* <li onClick={toggleSidebar}><Link to="/">Home</Link></li> */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar