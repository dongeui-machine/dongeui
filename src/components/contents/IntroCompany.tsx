import React from 'react';
import { styled } from 'styled-components';
import { BodyTextTypo, Heading3Typo } from '../../atoms/Typography';
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
export const IntroCompanyTitle = styled(Heading3Typo)`
    margin: 24px 24px 12px 24px;
    text-align: start;
`
export const IntroCompanyText = styled(BodyTextTypo)`
    white-space: pre-line;
    text-align: start;
    margin-left: 24px;
    margin-bottom: 24px;
`
export const IntroCompanyOwnerName = styled(BodyTextTypo)`
    width: 90%;
    text-align: end;
    margin-bottom: 40px;
`

const IntroCompany = () => {
    return (
        <IntroCompanyContainer>
            <IntroCompanyHeading>인사말</IntroCompanyHeading>
            <IntroCompanyLine/>
            <IntroCompanyTitle>
안녕하십니까?<br/>
동의기계 홈페이지를 찾아주셔서 감사합니다.
            </IntroCompanyTitle>
            <IntroCompanyText>
동의기계는 최고 품질의 한약 기계를 전문으로 공급하는 회사입니다.<br/>
고객과의 긴밀한 협력을 통해 함게 성장하며, 한약 산업을 선도하는 동반자로서 고객들과의 지속적인 협력을 소중히 여깁니다.<br/>
항상 질 높은 제품과 탁월한 서비스를 제공하여,<br/>
고객의 신뢰와 만족을 얻을 수 있도록 최선을 다하겠습니다. 
            </IntroCompanyText>
            <IntroCompanyOwnerName>대표 최정호</IntroCompanyOwnerName>
        </IntroCompanyContainer>
    );
};

export default IntroCompany;