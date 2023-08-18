import React from 'react';
import { styled } from 'styled-components';
import { NavSubButton } from '../../atoms/Buttons';
import token from '../../tokens/tokens.json';
import { HamburgerProps } from '../../types/HamburgerProps'; 

const { RegularShadow } = token.global;

export const HamburgerBackdrop = styled.div<{isHamburgerClick:boolean}>`
    background-color: rgba(0,0,0,0);
    visibility: ${(props)=>props.isHamburgerClick?'visible':'hidden'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 90vh;
    z-index: 99;
    overflow: hidden;
`

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
export const Hamburger = ({isHamburgerClick}:HamburgerProps) => {
    return (
        <HamburgerBackdrop isHamburgerClick={isHamburgerClick}>
            <HamburgerContainer isHamburgerClick={isHamburgerClick}>
                <NavSubButton to='/intro'>회사소개</NavSubButton>
                <NavSubButton to='/road'>오시는길</NavSubButton>
                <NavSubButton to='/products'>제품소개</NavSubButton>
                <NavSubButton to='/truck'>동의앤피용달</NavSubButton>
            </HamburgerContainer>
        </HamburgerBackdrop>
    );
};