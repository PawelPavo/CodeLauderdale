//@ts-nocheck

import * as React from 'react'
import { StyledBurger } from './Burger.styled';

const Burger: React.FC<IBurgerProps> = (props) => {

    return (
        <>
            <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)} >
                <div />
                <div />
                <div />
            </StyledBurger>
        </>
    )

}

export interface IBurgerProps { 
    open?: any;
    setOpen?: any;
}

export default Burger;