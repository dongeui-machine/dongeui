import React from 'react';
import { styled } from 'styled-components';
import { NavSubButton } from '../../atoms/Buttons';
import token from '../../tokens/tokens.json';

const { RegularShadow } = token.global;


export const HamburgerContainer = styled.section`
    position: absolute;
    top: 75px;
    right: 15px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    box-shadow: ${RegularShadow.value.x}px ${RegularShadow.value.y}px ${RegularShadow.value.blur}px ${RegularShadow.value.spread}px ${RegularShadow.value.color};
`

export const Hamburger = () => {
    return (
        <HamburgerContainer>
            <NavSubButton>회사소개</NavSubButton>
            <NavSubButton>동의메디칼</NavSubButton>
            <NavSubButton>동의기계</NavSubButton>
            <NavSubButton>동의앤피용달</NavSubButton>
        </HamburgerContainer>
    );
};