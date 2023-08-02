import React from 'react';
import { MainPageContainer } from './MainPage';
import { styled } from 'styled-components';
import { SmallBanner } from '../components/banners/SmallBanner';

export const DongeuiMedicalPageContainer = styled(MainPageContainer)`

`

const DongeuiMedicalPage = () => {
    return (
        <DongeuiMedicalPageContainer>
            <SmallBanner title='동의메디칼'/>
        </DongeuiMedicalPageContainer>
    );
};

export default DongeuiMedicalPage;