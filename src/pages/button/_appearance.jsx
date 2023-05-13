import React from 'react';
import Text from "../../components/text";
import styled from "styled-components";

const Appearance = () => {
  return (
    <StyledAppearance>
      <Text as={'p'} fontSize={20} fontWeight={600}>Appearance</Text>
      <Text as={'code'}>appearance</Text>
      <Text> property can set appearance of button:</Text>
    </StyledAppearance>
  )
}

export default Appearance

export const StyledAppearance = styled.div`
  
`
