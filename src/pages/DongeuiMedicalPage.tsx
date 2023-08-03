import React from 'react';
import { MainPageContainer } from './MainPage';
import { styled } from 'styled-components';
import { SmallBanner } from '../components/banners/SmallBanner';
import smallBanner_medical from '../assets/images/banner/smallBanner_medical.png'

export const DongeuiMedicalPageContainer = styled(MainPageContainer)`

`

const DongeuiMedicalPage = () => {
    return (
        <DongeuiMedicalPageContainer>
            <SmallBanner title='동의메디칼' imgUrl={`${smallBanner_medical}`}/>
        </DongeuiMedicalPageContainer>
    );
};

export default DongeuiMedicalPage;