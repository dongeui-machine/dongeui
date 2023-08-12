import React from 'react';
import { Heading2Typo } from '../../atoms/Typography';
import { styled } from 'styled-components';
import tokens from '../../tokens/tokens.json'
import Line from '../../atoms/Line';

const globalTokens = tokens.global;

export const CustomAside = styled.aside`
    flex-direction: column;
    justify-content: center;
    align-items: start;
`
export const SideBarHeading = styled(Heading2Typo)`
    width: 100%;
    text-align: center;
    color: ${globalTokens.DarkGray.value}
`

export const SideBar = () => {
    return (
        <CustomAside>
            <SideBarHeading>회사소개</SideBarHeading>
            <Line/>
        </CustomAside>
    );
};

export default SideBar;