import React, { useState } from 'react';
import { HeaderContainer, LogoButton, LogoButtonImg } from './Header';
import smallLogo from '../../assets/images/smallLogo.png'
import hamburgerIcon from '../../assets/images/icons/hamburgerIcon.svg'
import { styled } from 'styled-components';
import { Hamburger } from './Hamburger';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/ReducerReturn';
import { useDispatch } from 'react-redux';
import { setIsHamburgerClick } from '../../redux/actions/isHamburgerClickAction';

export const HeaderContainerMobile = styled(HeaderContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const HamburgerContainer = styled.div`
    position: relative;
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
    const isHamburgerClick = useSelector((state:RootState)=>state.isHamburgerClickReducer)
    const dispatch = useDispatch();

    return (
        <HeaderContainerMobile>
            <LogoButton to='/'>
                <LogoButtonImg src={smallLogo}/>
                동의기계
            </LogoButton>
            <HamburgerContainer>
                <HamburgerButton
                    imgUrl={hamburgerIcon} 
                    onClick={()=>{dispatch(setIsHamburgerClick(!isHamburgerClick));}} 
                    onBlur={()=>{ dispatch(setIsHamburgerClick(false)); }}/>
                <Hamburger/>
            </HamburgerContainer>
        </HeaderContainerMobile>
    );
};