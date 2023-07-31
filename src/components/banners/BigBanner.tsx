import React from 'react';
import { styled } from 'styled-components';
import mainBannerImage from '../../assets/images/banner/mainBannerImage.png'

export const BigBannerContainer = styled.section`
    background-image: url(${mainBannerImage});
    padding: 20px;
`

export const BigBanner = () => {
    return (
        <BigBannerContainer>
            This is Big Banner.
        </BigBannerContainer>
    );
};
