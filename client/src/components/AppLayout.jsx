import React from 'react'
import SideBar from './SideBar'

const AppLayout = (props) => {
  const { children } = props;
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-10 mt-5">
        { children }
      </div>
      
    </div>
  )
}

export default AppLayout