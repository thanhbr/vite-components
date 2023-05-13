import React from 'react';
import {Link} from "react-router-dom";

const Text = ({
                as = 'span',
                color = 'var(--secondary_100)',
                fontSize = 14,
                fontWeight = 400,
                lineHeight = 20,
                ...props
}) => {
  const isLink = as === 'a'
  const Tag = isLink ? (props?.target === '_blank' ? 'a' : Link) : as
  const styles = {
    color: as === 'code' ? 'var(--btn-primary-code)' : color,
    fontSize,
    fontStyle: as === 'i' ? 'italic' : 'normal',
    fontWeight: fontWeight
      ? fontWeight
      : ['b', 'strong', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as.toLowerCase())
        ? 600
        : 400,
    lineHeight: isNaN(lineHeight) ? lineHeight : `${lineHeight}px`,
    width: 'fit-content',
  }

  return (
    <Tag
      {...props}
      to={isLink ? props?.href || '#' : undefined}
      style={{...styles, ...props?.style}}
    >
      {props?.children}
    </Tag>
  )
}

export default Text