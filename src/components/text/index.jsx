import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Text = ({
                as = 'span',
                color,
                fontSize,
                fontWeight,
                classParent,
                ...props
}) => {
  const isLink = as === 'a'
  const Tag = isLink ? (props?.target === '_blank' ? 'a' : Link) : as

  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={classParent || ''}
    >
      <Tag
        {...props}
        as={as}
        to={isLink ? props?.href || '#' : undefined}
        className={`text-common ${props?.className || ''}`}
        style={{...props?.style}}
      >
        {props?.children}
      </Tag>
    </StyledText>
  )
}

export default Text

const StyledText = styled.div`
  .text-common {
    color: ${props => !!props?.color ? props?.color : 'var(--secondary_100)'};
    font-weight: ${props => !!props?.fontWeight ? props?.fontWeight : 400};
    font-size: ${props => !!props?.fontSize ? `${props?.fontSize}px` : "14px"};
    width: fit-content;
    
    &[as='code'] {
      color: var(--btn-primary-code);
      padding: 3px 5px;
      background: var(--code-text-bg);
    }
    &[as='b'], &[as='strong'], &[as='h1'], &[as='h2'], &[as='h3'], &[as='h4'], &[as='h5'], &[as='h6'] {
      font-weight: 600;
    }
    &[as='i'] {
      font-style: italic;
    }
  }
`
