import React from 'react';
import { styled } from 'styled-components';
import { BodyTextTypo, Heading2Typo } from '../../atoms/Typography';
import { SmallBannerProps } from '../../types/SmallBannerProps';

export const SmallBannerContainer = styled.section<{imgUrl: string}>`
    width: 100%;
    height: 30vh;
    min-height: 50px;
    background-image: url(${(props)=>props.imgUrl});
    background-size: cover;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SmallBannerTitle = styled(Heading2Typo)`
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.5);
`
export const SmallBanner = ({ title, subTitle, imgUrl } : SmallBannerProps) => {
    return (
        <SmallBannerContainer imgUrl={imgUrl}>
            <SmallBannerTitle>{ title }</SmallBannerTitle>
            <BodyTextTypo>{ subTitle?subTitle:null }</BodyTextTypo>
        </SmallBannerContainer>
    );
};