import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { NavSubButton } from '../../atoms/Buttons';
import token from '../../tokens/tokens.json';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/ReducerReturn';

const { RegularShadow } = token.global;

export const HamburgerContainer = styled.section<{isHamburgerClick:boolean}>`
    position: absolute;
    top: 65px;
    right: 30px;
    z-index: 100;
    opacity: ${(props)=>props.isHamburgerClick?'1':'0'};
    visibility: ${(props)=>props.isHamburgerClick?'visible':'hidden'};
    flex-direction: column;
    width: fit-content;
    box-shadow: ${RegularShadow.value.x}px ${RegularShadow.value.y}px ${RegularShadow.value.blur}px ${RegularShadow.value.spread}px ${RegularShadow.value.color};
    transition: 300ms;
`

export const Hamburger = () => {
    const isHamburgerClick = useSelector((state:RootState)=>state.isHamburgerClickReducer);
    

    return (
        <HamburgerContainer isHamburgerClick={isHamburgerClick}>
            <NavSubButton to='/intro'>회사소개</NavSubButton>
            <NavSubButton to='/road'>오시는길</NavSubButton>
            <NavSubButton to='/products'>제품소개</NavSubButton>
            <NavSubButton to='/truck'>동의앤피용달</NavSubButton>
        </HamburgerContainer>
    );
};