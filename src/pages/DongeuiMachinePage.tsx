import React from 'react';
import { styled } from 'styled-components';
import { MainPageContainer } from './MainPage';
import { SmallBanner } from '../components/banners/SmallBanner';
export const DongeuiMacinePageContainer = styled(MainPageContainer)`

`
export const DongeuiMachinePage = () => {
    return (
        <DongeuiMacinePageContainer>
            <SmallBanner title='동의기계'/>
        </DongeuiMacinePageContainer>
    );
};

export default DongeuiMachinePage;