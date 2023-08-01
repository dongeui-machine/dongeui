import React from 'react';
import { styled } from 'styled-components';
import mainBannerImage from '../../assets/images/banner/mainBannerImage.png';
import { BodyTextTypo, Heading2Typo } from '../../atoms/Typography';
import { ImageSlider } from './ImageSlider';
import mainBannerProduct1 from '../../assets/images/banner/mainBannerProductImg1.png';
import mainBannerProduct2 from '../../assets/images/banner/mainBannerProductImg2.png';
import mainBannerProduct3 from '../../assets/images/banner/mainBannerProductImg3.png';

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
`
export const BigBanner = () => {
    return (
        <BigBannerContainer imgUrl={mainBannerImage}>
            <BigBannerTextContainer>
                <BigBannerTextHeading>A/S를 최우선으로 하는 동의앤피 입니다.</BigBannerTextHeading>
                <BigBannerTextBody>
저희 회사는 최고 품질의 한약 기계를 전문으로 제조하고 공급합니다.<br/>
항상 질 높은 제품과 탁월한 서비스를 제공하여, <br/>
고객의 신뢰와 만족을 얻을 수 있도록 최선을 다하겠습니다.<br/>
                </BigBannerTextBody>
            </BigBannerTextContainer>
            <ImageSlider 
                imgUrl1={mainBannerProduct1}
                imgUrl2={mainBannerProduct2}
                imgUrl3={mainBannerProduct3}
                />
        </BigBannerContainer>
    );
};
