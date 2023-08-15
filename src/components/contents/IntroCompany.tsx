import React from 'react';
import { styled } from 'styled-components';
import { Heading3Typo } from '../../atoms/Typography';
import tokens from '../../tokens/tokens.json'
import { RegularLineDesign } from '../../atoms/Line';

const globalTokens = tokens.global;

export const IntroCompanyContainer = styled.section`
    flex-grow: 1;
`
export const IntroCompanyHeading = styled(Heading3Typo)`
width: 100%;
text-align: start;
padding: 10px 10px 11px 60px;
color: ${globalTokens.DarkGray.value};
`
export const IntroCompanyLine = styled(RegularLineDesign)`
    width: 100%;
    height: 1px;
    color: ${globalTokens.LightGray.value};
`

const IntroCompany = () => {
    return (
        <IntroCompanyContainer>
            <IntroCompanyHeading>인사말</IntroCompanyHeading>
            <IntroCompanyLine/>
            This is Introduction Page about my company.
        </IntroCompanyContainer>
    );
};

export default IntroCompany;