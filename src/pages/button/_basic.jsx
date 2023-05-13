import React from 'react';
import Button from "../../components/button";
import Text from "../../components/text";
import styled from "styled-components";

const Basic = () => {
  return (
    <StyledBasic>
      <Text as={'p'} fontSize={20} fontWeight={600}>Basic</Text>
      <Button appearance={'default'}>Default</Button>
    </StyledBasic>
  )
}

export default Basic


export const StyledBasic = styled.div`
  margin: 16px 0;
  p {
    margin-bottom: 16px;
  }
`
