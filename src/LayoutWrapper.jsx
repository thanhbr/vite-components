import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import {privateRoutes} from "./routes";
import Sidebar from "./components/sidebar";

const LayoutWrapper = () => {
  return (
    <StyledSidebar>
      <Router>
        <Sidebar />
        <div className={'content-wrapper'}>
          <Routes>
            <Route exact path={'/'} element={''}>
            </Route>
            {privateRoutes.map((route, index) => {
              const Page = route.component
              return (
                <Route exact key={index} path={route.path} element={<Page />} />
              )
            })}
          </Routes>
        </div>
      </Router>
    </StyledSidebar>
  )
}

export default LayoutWrapper


export const StyledSidebar = styled.div`
  .content-wrapper {
    margin-left: 324px;
  }
`