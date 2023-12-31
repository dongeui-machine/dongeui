import React, { useEffect, useMemo } from 'react';
import { MainPageContainer } from './MainPage';
import { styled } from 'styled-components';
import { SmallBanner } from '../components/banners/SmallBanner';
import { Footer } from '../components/footers/Footer';
import smallBanner_introduce from '../assets/images/banner/smallBanner_introduce.png'
import SideBar from '../components/sidebar/SideBar';
import IntroCompany from '../components/contents/IntroCompany';
import { useDispatch } from 'react-redux';
import { setIsHamburgerClick } from '../redux/actions/isHamburgerClickAction';
import { RootState } from '../types/ReducerReturn';
import { useSelector } from 'react-redux';

export const IntroCompanyPageContainer = styled(MainPageContainer)`
    width: 100vw;
`
export const IntroCompanyPageMainContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: start;
`
export const IntroCompanyPage = () => {
    const browserWidth = useSelector((state:RootState)=>state.browserWidthReducer.width);
    const dispatch = useDispatch();

    useMemo(()=>{
        dispatch(setIsHamburgerClick(false));
    },[]);

    return (
        <IntroCompanyPageContainer>
            <SmallBanner title='회사소개' imgUrl={`${smallBanner_introduce}`}/>
            <IntroCompanyPageMainContainer>
                {
                    browserWidth>850?<SideBar></SideBar>:null
                }
                <IntroCompany/>
            </IntroCompanyPageMainContainer>
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </IntroCompanyPageContainer>
    );
};

export default IntroCompanyPage;