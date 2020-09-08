//@ts-nocheck

import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu: React.FC<IMenuProps> = (props) => {
  return (
    <StyledMenu open={props.open}>
      <a href="/">
        
        About us
      </a>
      <a href="/">
        
        Pricing
        </a>
      <a href="/">
        
        Contact
        </a>
    </StyledMenu>
  )
}

export interface IMenuProps {
  open?: any;
  setOpen?: any;
}

export default Menu;