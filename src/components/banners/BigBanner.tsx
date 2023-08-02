import React from 'react';
import { styled } from 'styled-components';
import mainBannerImage from '../../assets/images/banner/mainBannerImage.png';
import { BodyTextTypo, Heading2Typo } from '../../atoms/Typography';
import { ImageSlider } from './ImageSlider';
import mainBannerProduct1 from '../../assets/images/banner/mainBannerProductImg1.png';
import mainBannerProduct2 from '../../assets/images/banner/mainBannerProductImg2.png';
import mainBannerProduct3 from '../../assets/images/banner/mainBannerProductImg3.png';
import { BigBannerProps } from '../../types/BigBannerProps';

export const BigBannerContainer = styled.section<{imgUrl: string}>`
    width: 100%;
    background-image: url(${(props)=>props.imgUrl});
    background-size: cover;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const BigBannerTextContainer = styled.section`
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: end;
`
export const BigBannerTextHeading = styled(Heading2Typo)`
    text-align: end;
    margin-bottom: 1rem;
`
export const BigBannerTextBody = styled(BodyTextTypo)`
    text-align: end;
    white-space: pre-line;
`
export const BigBanner = ({ title, body } : BigBannerProps) => {
    return (
        <BigBannerContainer imgUrl={mainBannerImage}>
            <BigBannerTextContainer>
                <BigBannerTextHeading>{ title }</BigBannerTextHeading>
                <BigBannerTextBody>{ body }</BigBannerTextBody>
            </BigBannerTextContainer>
            <ImageSlider 
                imgUrl1={mainBannerProduct1}
                imgUrl2={mainBannerProduct2}
                imgUrl3={mainBannerProduct3}
                />
        </BigBannerContainer>
    );
};
