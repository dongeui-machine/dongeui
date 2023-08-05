import React from 'react';
import { styled } from 'styled-components';
import token from '../../tokens/tokens.json';
import smallLogo from '../../assets/images/smallLogo.png'
import { NavButton } from '../../atoms/Buttons';
import { Link } from 'react-router-dom';

const { bodyText, White, Black, RegularShadow } = token.global;

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
export const LogoButton = styled(Link)`
    text-decoration-line : none;
    text-decoration : none;
    color: ${Black.value};
    border: 0;
    background-color: transparent;
    margin: 10px 35px;
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
            <LogoButton to='/'>
                <LogoButtonImg src={smallLogo}/>
                동의기계
            </LogoButton>
            <LogoNavButtonContainer>
                <NavButton to='/intro'>회사소개</NavButton>
                <NavButton to='/road'>오시는길</NavButton>
                <NavButton to='/products'>제품소개</NavButton>
                <NavButton to='/truck'>동의앤피용달</NavButton>
            </LogoNavButtonContainer>
        </HeaderContainer>
    );
};
