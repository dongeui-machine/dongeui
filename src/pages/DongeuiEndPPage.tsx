import React from 'react';
import { styled } from 'styled-components';
import { MainPageContainer } from './MainPage';
import { SmallBanner } from '../components/banners/SmallBanner';

export const DongeuiEndPPageContainer = styled(MainPageContainer)`

`

const DongeuiEndPPage = () => {
    return (
        <DongeuiEndPPageContainer>
            <SmallBanner title='동의앤피용달'/>
        </DongeuiEndPPageContainer>
    );
};

export default DongeuiEndPPage;