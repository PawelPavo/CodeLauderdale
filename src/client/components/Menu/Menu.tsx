//@ts-nocheck
import React from 'react';
import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';

const Menu: React.FC<IMenuProps> = (props) => {
  return (
    <StyledMenu open={props.open}>
      <div>
        <NavLink
          className="text-decoration-none"
          exact to="/"
        >Home</NavLink>
      </div>
      <div>
        <NavLink
          className="text-decoration-none"
          exact to="/blogs"
        >Blogs</NavLink>
      </div>
    </StyledMenu>
  )
}

export interface IMenuProps {
  open?: any;
  setOpen?: any;
}

export default Menu;