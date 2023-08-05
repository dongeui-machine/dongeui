import React, { useState } from 'react';
import { HeaderContainer, LogoButton, LogoButtonImg } from './Header';
import smallLogo from '../../assets/images/smallLogo.png'
import hamburgerIcon from '../../assets/images/icons/hamburgerIcon.svg'
import { styled } from 'styled-components';
import { Hamburger } from './Hamburger';

export const HeaderContainerMobile = styled(HeaderContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HamburgerButton = styled.button<{imgUrl:string}>`
    margin: 10px 30px 10px 10px;
    border: 0;
    background-image: url(${props=>props.imgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: transparent;
    width: 45px;
    height: 45px;
    cursor: pointer;
`

export const HeaderMobile = () => {
    const [isHamburgerClick, setIsHamburgerClick] = useState<boolean>(false);
    
    const hamburgerClickListener = () => {
        setIsHamburgerClick(!isHamburgerClick);
    }
    return (
        <HeaderContainerMobile>
            <LogoButton to='/'>
                <LogoButtonImg src={smallLogo}/>
                동의기계
            </LogoButton>
            <HamburgerButton imgUrl={hamburgerIcon} onClick={hamburgerClickListener}>
                <Hamburger isHamburgerClick={isHamburgerClick}/>
            </HamburgerButton>
        </HeaderContainerMobile>
    );
};