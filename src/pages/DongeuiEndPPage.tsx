import React from 'react';
import { styled } from 'styled-components';
import { MainPageContainer } from './MainPage';
import { SmallBanner } from '../components/banners/SmallBanner';
import smallBanner_truck from '../assets/images/banner/smallBanner_truck.png'

export const DongeuiEndPPageContainer = styled(MainPageContainer)`

`

const DongeuiEndPPage = () => {
    return (
        <DongeuiEndPPageContainer>
            <SmallBanner title='동의앤피용달' imgUrl={`${smallBanner_truck}`}/>
        </DongeuiEndPPageContainer>
    );
};

export default DongeuiEndPPage;