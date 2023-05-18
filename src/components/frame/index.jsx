import React from 'react';
import styled from "styled-components";

const Frame = ({...props}) => {
  return (
    <StyledFrame {...props}>
      {props.children}
    </StyledFrame>
  )
}

export default Frame


export const StyledFrame = styled.div`
  width: 95%;
  border: 1px dashed var(--border-frame-color);
  border-radius: 8px;
  padding: 16px;
  &:hover {
    border: 1px dashed var(--border-frame-color-hover);
  }
`
