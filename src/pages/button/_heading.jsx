import React from 'react';
import Text from "../../components/text";
import {buttonLayouts} from "./interfaces/_contants";
import styled from "styled-components";

const Heading = () => {
  return (
    <StyledHeading>
      <Text as={'b'} fontSize={28} classParent={'title'}>Button</Text>
      <Text as={'p'}>Commonly used operating buttons, button combinations, button layouts.</Text>
      <ul className={'subtitle-ul'}>
        {buttonLayouts.map(item => (
          <li key={item?.id}
              className={'subtitle-li'}
          >
            <Text as={'code'}>{`<${item?.name}>`}</Text>
            <Text>{item?.content}</Text>
          </li>
        ))}
      </ul>
    </StyledHeading>
  )
}

export default Heading

export const StyledHeading = styled.div`
  padding-top: 16px;
  .title {
    margin: 16px 0;
  }
  .subtitle {
    &-ul {
      list-style-type: circle;
    }
    &-li {
      margin: 8px 0;
      display: flex;
    }
  }
`
