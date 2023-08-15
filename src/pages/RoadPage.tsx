import React, { useMemo } from 'react';
import { styled } from 'styled-components';
import { MainPageContainer } from './MainPage';
import { SmallBanner } from '../components/banners/SmallBanner';
import smallBanner_introduce from '../assets/images/banner/smallBanner_introduce.png'
import { Footer } from '../components/footers/Footer';
import SideBar from '../components/sidebar/SideBar';
import { useDispatch } from 'react-redux';
import { setIsHamburgerClick } from '../redux/actions/isHamburgerClickAction';


export const RoadPageContainer = styled(MainPageContainer)`
`

const RoadPage = () => {
    const dispatch = useDispatch();

    useMemo(()=>{
        dispatch(setIsHamburgerClick(false))
    },[]);


    return (
        <RoadPageContainer>
            <SmallBanner title='오시는길' imgUrl={`${smallBanner_introduce}`}/>
            <RoadPageContainer>
                <SideBar></SideBar>
            </RoadPageContainer>
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </RoadPageContainer>
    );
};

export default RoadPage;