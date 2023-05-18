import React from 'react';
import Text from "../../../../components/text";
import styled from "styled-components";
import {buttonAppearances} from "../../interfaces/_contants";
import Frame from "../../../../components/frame";
import Button from "../../../../components/button";

const Appearance = () => {
  return (
    <StyledAppearance>
      <Text as={'b'} fontSize={24} classParent={'btn-appear--title'}>Appearance</Text>
      <div className={'btn-appear--subtitle'}>
        <Text as={'code'}>appearance</Text>
        <Text> property can set appearance of button:</Text>
      </div>
      <ul className={'btn-appear--list'}>
        {buttonAppearances.map(item => (
          <li key={item?.id} className={'btn-appear--item'}>
            <Text>'{item?.code || ''}' {item?.content || ''}</Text>
          </li>
        ))}
      </ul>
      <Frame>
        {buttonAppearances.map(item => (
          <Button key={item?.id}
                  appearance={item?.code}
                  classParent={'btn-appear--atom'}
          >{item?.name || ''}</Button>
        ))}
      </Frame>
    </StyledAppearance>
  )
}

export default Appearance

export const StyledAppearance = styled.div`
  .btn-appear {
    &--title {
      margin: 16px 0;
    }
    &--subtitle {
      display: flex;
    }
    &--list {
      list-style-type: circle;
      padding: 10px 20px;
    }
    &--item {
      line-height: 26px;
    }
    &--atom {
      margin-right: 8px;
    }
  }
`
