import React from 'react';
import {Link} from 'react-router-dom';
import {StyledSidebarTitle, StyledSidebarMenuItem} from "./_style";
import {SIDEBAR_TITLE} from "../../constants/sidebar";
import {ICONS} from "../../constants/_icons";
import Text from "../text";

const SidebarTitle = ({...props}) => {
  return (
    <StyledSidebarTitle
      {...props}
    >
      {ICONS.FOUR_SQUARE}
      <span>{SIDEBAR_TITLE}</span>
    </StyledSidebarTitle>
  )
}

const SidebarMenuItem = ({data, size = 'md', ...props}) => {
  return (
    <StyledSidebarMenuItem
      {...props}
    >
      <div>
        <Link
          className="sidebar-menu-item__container"
          to={data?.path || '#'}
          data-size={size}
          // data-single={!haveSubMenu}
          // onClick={handleSubMenuToggle}
        >
          <Text>{data?.label || ''}</Text>
        </Link>

      </div>
    </StyledSidebarMenuItem>
  )
}

const SIDEBAR_COMPONENTS = {SidebarTitle, SidebarMenuItem}

export default SIDEBAR_COMPONENTS