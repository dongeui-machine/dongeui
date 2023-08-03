import React from 'react';
import { styled } from 'styled-components';
import { MainPageContainer } from './MainPage';
import { SmallBanner } from '../components/banners/SmallBanner';
import smallBanner_machine from '../assets/images/banner/smallBanner_machine.png' 
import { Footer } from '../components/footers/Footer';

export const DongeuiMacinePageContainer = styled(MainPageContainer)`

`
export const DongeuiMachinePage = () => {
    return (
        <DongeuiMacinePageContainer>
            <SmallBanner title='동의기계' imgUrl={`${smallBanner_machine}`}/>
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </DongeuiMacinePageContainer>
    );
};

export default DongeuiMachinePage;