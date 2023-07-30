import React from 'react';
import { styled } from 'styled-components';
import token from '../tokens/tokens.json';
import smallLogo from '../assets/images/smallLogo.png'
import { NavButton } from '../atoms/Buttons';

const { bodyText, White, RegularShadow } = token.global;

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: ${White.value};
    box-shadow: ${RegularShadow.value.x}px ${RegularShadow.value.y}px ${RegularShadow.value.blur}px ${RegularShadow.value.spread}px ${RegularShadow.value.color};
`
export const LogoButton = styled.button`
    border: 0;
    background-color: transparent;
    margin: 22px 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: ${bodyText.value}px;
    font-weight: 700;
    cursor: pointer;
`
export const LogoButtonImg = styled.img`
    height: 56px;
    margin-right: 10px;
`
export const LogoNavButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoButton>
                <LogoButtonImg src={smallLogo}/>
                동의앤피
            </LogoButton>
            <LogoNavButtonContainer>
                <NavButton>회사소개</NavButton>
                <NavButton>동의메디칼</NavButton>
                <NavButton>동의기계</NavButton>
                <NavButton>동의앤피용달</NavButton>
            </LogoNavButtonContainer>
        </HeaderContainer>
    );
};
