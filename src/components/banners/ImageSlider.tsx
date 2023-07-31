import React from 'react';
import { SliderProps } from '../../types/SliderProps';
import { styled } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderContaner = styled.section`
    margin-top: 20px;
    width: 300px;
    height: max-content;
`

export const ImageSliderContainer = styled.div`
    width: 311px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImageSliderImg = styled.img`
`

export const ImageSlider = ({ imgUrl1, imgUrl2, imgUrl3 } : SliderProps) => {
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
        <SliderContaner>
            <Slider {...settings}>
                <ImageSliderContainer>
                    <ImageSliderImg src={imgUrl1}/>
                </ImageSliderContainer>
                <ImageSliderContainer>
                    <ImageSliderImg src={imgUrl2}/>
                </ImageSliderContainer>
                <ImageSliderContainer>
                    <ImageSliderImg src={imgUrl3}/>
                </ImageSliderContainer>
            </Slider>
        </SliderContaner>
    );
};