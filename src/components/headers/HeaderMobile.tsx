import React from 'react';
import { HeaderContainer, LogoButton, LogoButtonImg } from './Header';
import smallLogo from '../../assets/images/smallLogo.png'
import hamburgerIcon from '../../assets/images/icons/hamburgerIcon.svg'
import { styled } from 'styled-components';
import { Hamburger } from './Hamburger';

export const HeaderContainerMobile = styled(HeaderContainer)`
    justify-content: space-between;
`

export const HamburgerButton = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;
`

export const HamburgerButtonImg = styled.img`
    margin-right: 30px;
    width: 45px;
`

export const HeaderMobile = () => {
    return (
        <HeaderContainerMobile>
            <LogoButton>
                <LogoButtonImg src={smallLogo}/>
                동의앤피
            </LogoButton>
            <HamburgerButton>
                <HamburgerButtonImg src={hamburgerIcon}/>
                <Hamburger/>
            </HamburgerButton>
        </HeaderContainerMobile>
    );
};