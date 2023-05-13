import styled from 'styled-components'

export const StyledSidebar = styled.div`
  background: #f4f5f7;
  width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  
  padding: 24px 16px;
  font-size: 20px;
  color: var(--current-color);
  
  svg {
    fill: var(--current-color);
    margin: -2px 4px 0 0;
    vertical-align: middle;
  }
`

export const StyledSidebarTitle = styled.div`

`

export const StyledSidebarMenuItem = styled.li`
  list-style-type: none;
  margin-top: 16px;
  .sidebar-menu-item {
    color: var(--current-color);
  }
`
