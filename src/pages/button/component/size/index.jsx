import React from 'react';
import styled from "styled-components";
import Text from "../../../../components/text";
import Frame from "../../../../components/frame";
import {buttonSizes} from "../../interfaces/_contants";
import Button from "../../../../components/button";

const Size = () => {
  return (
    <StyledSize>
      <Text as={'b'} fontSize={24}>Size</Text>
      <Text classParent={'btn-size--subtitle'}>The <Text as={'code'}>size</Text>property sets the button size, options includes: 'lg', 'md', 'sm', 'xs'.</Text>
      <Frame className={'btn-size--list'}>
        {buttonSizes.map(item => (
          <Button key={item?.id}
                  classParent={'btn-size--item'}
                  size={item?.size}
          >
            {item?.name || ''}
          </Button>
        ))}
      </Frame>
    </StyledSize>
  )
}

export default Size


export const StyledSize = styled.div`
  margin-top: 16px;
  .btn-size {
    &--subtitle {
       margin-top: 16px;
      & span {
        display: flex;
      }
    } 
    &--list {
      margin-top: 16px;
    }
    &--item {
      margin-right: 8px;
    }
  }
`
