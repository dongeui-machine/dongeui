import React from 'react';
import { MainPageContainer } from './MainPage';
import { styled } from 'styled-components';
import { SmallBanner } from '../components/banners/SmallBanner';
import smallBanner_medical from '../assets/images/banner/smallBanner_medical.png'
import { Footer } from '../components/footers/Footer';
import ItemList from '../components/contents/ItemList';

export const DongeuiMedicalPageContainer = styled(MainPageContainer)`

`

const ProductPage = () => {
    return (
        <DongeuiMedicalPageContainer>
            <SmallBanner title='제품소개' imgUrl={`${smallBanner_medical}`}/>
            <ItemList/>
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </DongeuiMedicalPageContainer>
    );
};

export default ProductPage;