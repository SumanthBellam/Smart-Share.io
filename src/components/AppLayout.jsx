import React from 'react'
import SideBar from './SideBar'

const AppLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <SideBar />
      { children }
    </div>
  )
}

export default AppLayout