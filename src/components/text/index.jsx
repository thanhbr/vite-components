import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Text = ({
                as = 'span',
                fontSize = 14,
                fontWeight = 400,
                lineHeight = 20,
                ...props
}) => {
  const isLink = as === 'a'
  const Tag = isLink ? (props?.target === '_blank' ? 'a' : Link) : as
  const styles = {
    fontSize,
    fontStyle: as === 'i' ? 'italic' : 'normal',
    lineHeight: isNaN(lineHeight) ? lineHeight : `${lineHeight}px`,
  }

  return (
    <StyledText>
      <Tag
        {...props}
        to={isLink ? props?.href || '#' : undefined}
        style={{...styles, ...props?.style}}
        data-style={as}
      >
        {props?.children}
      </Tag>
    </StyledText>
  )
}

export default Text

export const StyledText = styled.div`
  color: var(--secondary_100);
  font-weight: 400;
  width: fit-content;
  
  code[data-style='code'] {
    color: var(--btn-primary-code);
    padding: 3px 5px;
    background: var(--code-text-bg);
  }
  b, strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
`
