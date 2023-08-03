import React from 'react';
import { styled } from 'styled-components';
import { MainPageContainer } from './MainPage';
import { SmallBanner } from '../components/banners/SmallBanner';
import smallBanner_machine from '../assets/images/banner/smallBanner_machine.png' 

export const DongeuiMacinePageContainer = styled(MainPageContainer)`

`
export const DongeuiMachinePage = () => {
    return (
        <DongeuiMacinePageContainer>
            <SmallBanner title='동의기계' imgUrl={`${smallBanner_machine}`}/>
        </DongeuiMacinePageContainer>
    );
};

export default DongeuiMachinePage;