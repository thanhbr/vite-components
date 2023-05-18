import React from 'react';
import styled from "styled-components";

const Button = ({
        appearance='default', // 'default' | 'primary' | 'link' | 'subtle' | 'ghost'
        size='fit', // 'lg' | 'md' | 'sm' | 'xs' || 'fit'
        disabled=false, // boolean
        icon, // svg only,
        iconPosition, // front | back
        classParent,
        ...props
}) => {
  return (
    <StyledButton
      {...props}
      data-appearance={appearance}
      data-size={size}
      className={classParent || ''}
    >
      {icon
        ? <div
            className={'button-container'}
            data-appearance={appearance}
            data-disabled={disabled}
          >
            {
              iconPosition === 'back'
                ? <>{props.children && <p>{props.children}</p>} {icon}</>
                : <>{icon} {props.children && <p>{props.children}</p>}</>
            }
          </div>
        : props.children
      }
    </StyledButton>
  )
}

export default Button


export const StyledButton = styled.button`
  height: 36px;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  
  &[data-appearance="default"] {
    background-color: var(--btn-default-bg);
    &:hover {
      background-color: var(--btn-default-hover-bg);
    }
  }
  &[data-appearance="primary"] {
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text);
  }
  &[data-size="fit"] {
    width: fit-content;
  }
  &[data-size="md"] {
    width: 60px;
  }
`
