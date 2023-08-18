import React from 'react';
import { styled } from 'styled-components';
import { IntroCompanyHeading, IntroCompanyLine } from './IntroCompany';
import KaKaoMap from '../kakaoMap/KaKaoMap';
import { BodyTextTypo } from '../../atoms/Typography';

export const IntroRoadContainer = styled.section`
    flex-grow: 1;
    overflow-x: hidden;
`
export const IntroRoadHeading = styled(IntroCompanyHeading)`
`
export const IntroRoadLine = styled(IntroCompanyLine)`
`
export const IntroRoadMapContainer = styled.section`
    width: 100%;
    margin: 32px 24px 32px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const IntroRoadInfo = styled(BodyTextTypo)`
    width: 100%;
    max-width: 600px;
    text-align: start;
`
const IntroRoad = () => {
    return (
        <IntroRoadContainer>
            <IntroRoadHeading>오시는길</IntroRoadHeading>
            <IntroRoadLine/>
            <IntroRoadMapContainer>
                <KaKaoMap lat={37.521754} lng={126.832335}/>
                <IntroRoadInfo>주소 : 서울특별시 양천구 지양로9길 12 제일B/D 1층</IntroRoadInfo>
                <IntroRoadInfo>전화 : 010-5223-1151</IntroRoadInfo>
            </IntroRoadMapContainer>
        </IntroRoadContainer>
    );
};

export default IntroRoad;