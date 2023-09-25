import { styled } from 'styled-components';
import { MainPageContainer } from './MainPage';
import { SmallBanner } from '../components/banners/SmallBanner';
import smallBanner_truck from '../assets/images/banner/smallBanner_truck.png'
import { Footer } from '../components/footers/Footer';
import CarInfo from '../components/contents/CarInfo';
import CarCallInfo from '../components/contents/CarCallInfo';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setIsHamburgerClick } from '../redux/actions/isHamburgerClickAction';

export const DongeuiEndPPageContainer = styled(MainPageContainer)`
`
export const DongeuiEndPPageMainContainer = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const DongeuiEndPPage = () => {
    const dispatch = useDispatch();
    
    useMemo(()=>{
        dispatch(setIsHamburgerClick(false));
    },[]);

    return (
        <DongeuiEndPPageContainer>
            <SmallBanner title='동의앤피용달' subTitle='가장 편리하고 저렴한 용달 서비스를 이용해보세요.' imgUrl={`${smallBanner_truck}`}/>
            <DongeuiEndPPageMainContainer>
                <CarInfo/>
                <CarCallInfo/>
            </DongeuiEndPPageMainContainer>
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </DongeuiEndPPageContainer>
    );
};

export default DongeuiEndPPage;