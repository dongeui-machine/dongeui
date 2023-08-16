import React from 'react';
import { Heading3Typo } from '../../atoms/Typography';
import { styled } from 'styled-components';
import tokens from '../../tokens/tokens.json'
import { RegularLineDesign } from '../../atoms/Line';
import { CommonTextButton } from '../../atoms/Buttons';

const globalTokens = tokens.global;

export const CustomAside = styled.aside`
    width: fit-content;
    max-width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SideBarHeading = styled(Heading3Typo)`
    width: 100%;
    text-align: center;
    padding: 10px;
    color: ${globalTokens.DarkGray.value};
`
export const SideBarLine = styled(RegularLineDesign)`
    max-width: 250px;
    width: 30vw;
`
export const SidebarButton = styled(CommonTextButton)`
    font-size: ${globalTokens.bodyText.value}px;
    width: 100%;
    padding: 10px;
    text-align: center;
`

export const SideBar = () => {
    return (
        <CustomAside>
            <SideBarHeading>회사소개</SideBarHeading>
            <SideBarLine/>
            <SidebarButton to='/intro'>인사말</SidebarButton>
            <SidebarButton to='/road'>오시는길</SidebarButton>
        </CustomAside>
    );
};

export default SideBar;