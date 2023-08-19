import React from 'react';
import { styled } from 'styled-components';
import { BodyTextTypo, Heading3Typo } from '../../atoms/Typography';
import carFront from '../../assets/images/car/carFront.png';
import carBack from '../../assets/images/car/carBack.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CarInfoContainer = styled.section`
    margin: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CarInfoHeading = styled(Heading3Typo)`
    width: 100%;
    margin: 12px 12px 12px 40px;
`
export const CarInfoText = styled(BodyTextTypo)`
    width: 400px;
    margin: 4px 4px 0px 40px;
    text-align: start;
`
export const CarSliderContainer = styled.section`
    width: 500px;
    max-height: 800px;
    z-index: -1;
`
export const CarImageSlideContainer = styled.section`
    width: 300px;
    max-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const CarInfo = () => {
    const settings = {
        dots: false, //셀의 수만큼 아래에 점이 표시된다
        arrows: false,//좌우 화살표 버튼 없앰
        infinite: true, // 무한 캐러셀이 만들어진다
        autoplay: true,//자동으로 계속 돌아간다
        autoplaySpeed: 3000, //자동으로 캐러셀이 넘어가는 속도
        speed: 600, // 캐러셀이 넘어가는 속도
        slidesToShow: 1, // 몇개의 셀이 한번에 보일지
        slidesToScroll: 1, //몇개의 셀이 넘어갈지
        fade: true, //에니메이션은 fade로 설정
        centerMode: true,
    }

    return (
        <CarInfoContainer>
            <CarInfoHeading>차량 정보</CarInfoHeading>
            <CarSliderContainer>
                <Slider {...settings}>
                    <CarImageSlideContainer>
                        <CarImage src={carFront}/>
                    </CarImageSlideContainer>
                    <CarImageSlideContainer>
                        <CarImage src={carBack}/>
                    </CarImageSlideContainer>
                </Slider>
            </CarSliderContainer>
            <CarInfoText>차종 : 1t 리프트차</CarInfoText>
            <CarInfoText>이용 가능한 서비스 : 단순 용달, 용달 이사</CarInfoText>
            <CarInfoText>이용 가능 지역 : 서울, 경기, 인천 전 지역</CarInfoText>
        </CarInfoContainer>
    );
};

export default CarInfo;