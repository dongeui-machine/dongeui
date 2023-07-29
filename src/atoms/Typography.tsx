import token from '../tokens/tokens.json';
import { styled } from 'styled-components';

export const Heading1Typo = styled.h1`
    margin: 0;
    font-size: 40px;
`;
export const Heading2Typo = styled.h2`
    margin: 0;
    font-size: 36px;
`
export const Heading3Typo = styled.h3`
    margin: 0;
    font-size: 32px;
`
export const BodyTextTypo = styled.div`
    margin: 0;
    font-size: 24px;
`
export const SmallTextTypo = styled.span`
    margin: 0;
    font-size: 20px;
`
export type TitleProps = {
    text?: string;
}

export const Typography = ({ text } : TitleProps) => {
    return (<>
        <Heading1Typo>{ text }</Heading1Typo>
        <Heading2Typo>{ text }</Heading2Typo>
        <Heading3Typo>{ text }</Heading3Typo>
        <BodyTextTypo>{ text }</BodyTextTypo>
        <SmallTextTypo>{ text }</SmallTextTypo>
    </>);
}