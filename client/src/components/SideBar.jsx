import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

/**
 * A sidebar component that can be toggled open and closed.
 * Clicking on a link, or clicking the 
 * @returns A sidebar component as a JSX element.
 */

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   if(isSidebarOpen) {
  //     setIsSidebarOpen(false);
  //   } else {
  //     setIsSidebarOpen(true);
  //   }
  //   console.log("we have set isSidebarOpen to " + isSidebarOpen)
  // }

/**
 * Toggles the sidebar open or closed based on the provided boolean value.
 * @param {boolean} boolValue - A boolean indicating whether the sidebar should be open (true) or closed (false).
 */
  const toggleSidebar = (boolValue) => {
    setIsSidebarOpen(boolValue);
    console.log("we have set isSidebarOpen to " + isSidebarOpen)
  }

  return (
    <div className="sticky top-0 z-50 flex">
      <div className="drawer lg:drawer-open lg:w-[15%]">
        <input 
          id="my-drawer-3" 
          type="checkbox" 
          className="drawer-toggle" 
          checked={isSidebarOpen} 
          onChange={setIsSidebarOpen}
        /> 
        <div className="drawer-content flex flex-col lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-black" onClick={() => toggleSidebar(true)}>
              <AiOutlineMenu size={30}/>
            </label>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay" onClick={() => toggleSidebar(false)}></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li onClick={() => toggleSidebar(false)}><Link to="/">Home</Link></li>
            <li onClick={() => toggleSidebar(false)}><Link to={"/profile"}>Profile</Link></li>
            <li onClick={() => toggleSidebar(false)}><Link to={"/landing"}>Landing</Link></li>

          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar