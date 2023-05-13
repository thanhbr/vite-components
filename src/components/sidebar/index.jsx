import React from 'react';
import SIDEBAR_COMPONENTS from "./_component";
import {SIDEBAR_MENU_ITEMS} from "./_contants";
import {StyledSidebar} from "./_style";

const Sidebar = ({...props}) => {
  const {SidebarTitle, SidebarMenuItem} = SIDEBAR_COMPONENTS

  return (
    <StyledSidebar
      {...props}
    >
      <SidebarTitle />
      {SIDEBAR_MENU_ITEMS.map(item => (
        <SidebarMenuItem key={item.id} data={item} />
      ))}
    </StyledSidebar>
  )
}

export default Sidebar;