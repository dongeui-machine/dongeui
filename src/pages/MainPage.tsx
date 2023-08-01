import React from 'react';
import { styled } from 'styled-components';
import { BigBanner } from '../components/banners/BigBanner';
import { Footer } from '../components/footers/Footer';

export const MainPageContainer = styled.div`
    width: 100vw;
`
export const MainPage = () => {
    const title: string = 'A/S를 최우선으로 하는 동의앤피 입니다.';
    const body: string = '저희 회사는 최고 품질의 한약 기계를 전문으로 제조하고 공급합니다. \n 항상 질 높은 제품과 탁월한 서비스를 제공하여, \n 고객의 신뢰와 만족을 얻을 수 있도록 최선을 다하겠습니다.';
    return (
        <MainPageContainer>
            <BigBanner title={title} body={body}/>
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </MainPageContainer>
    );
};

export default MainPage;