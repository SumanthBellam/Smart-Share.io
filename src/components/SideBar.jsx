import React from 'react'
import { useState } from 'react'


const SideBar = () => {

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const sideNavClicked = () => {
  //   if(isSidebarOpen) {
  //     setIsSidebarOpen(false);
  //   } else {
  //     setIsSidebarOpen(true);
  //   }
  // }

  return (
    <div className="sticky top-0 z-50">
      
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default SideBar