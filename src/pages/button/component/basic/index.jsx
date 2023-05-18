import React from 'react';
import styled from "styled-components";
import Text from "../../../../components/text";
import Button from "../../../../components/button";
import Frame from "../../../../components/frame";

const Basic = () => {
  return (
    <StyledBasic>
      <Text as={'b'} fontSize={24}>Basic</Text>
      <Frame className={'btn-basic--frame'}>
        <Button appearance={'default'}>Default</Button>
      </Frame>
    </StyledBasic>
  )
}

export default Basic


export const StyledBasic = styled.div`
  margin: 16px 0;
  .btn-basic {
    &--frame {
      padding: 16px;
    }
  }
`
