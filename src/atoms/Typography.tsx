import token from '../tokens/tokens.json';
import { styled } from 'styled-components';

const { Heading1, Heading2, Heading3, bodyText, smallText } = token.global;

export const Heading1Typo = styled.h1`
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    font-size: ${Heading1.value}px;
`;
export const Heading2Typo = styled.h2`
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    font-size: ${Heading2.value}px;
`
export const Heading3Typo = styled.h3`
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    font-size: ${Heading3.value}px;
`
export const BodyTextTypo = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    font-size: ${bodyText.value}px;
`
export const SmallTextTypo = styled.span`
    font-family: 'Noto Sans KR', sans-serif;    
    margin: 0;
    font-size: ${smallText.value}px;
`
export type TypoProps = {
    text?: string;
}

export const Typography = ({ text } : TypoProps) => {
    return (<>
        <Heading1Typo>{ text }</Heading1Typo>
        <Heading2Typo>{ text }</Heading2Typo>
        <Heading3Typo>{ text }</Heading3Typo>
        <BodyTextTypo>{ text }</BodyTextTypo>
        <SmallTextTypo>{ text }</SmallTextTypo>
    </>);
}