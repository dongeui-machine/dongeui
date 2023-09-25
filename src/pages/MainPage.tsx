import React, { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { BigBanner } from '../components/banners/BigBanner';
import { Footer } from '../components/footers/Footer';
import { Heading3Typo } from '../atoms/Typography';
import { getMainPageItemData } from '../services/getItemData';
import { Item } from '../components/contents/Item';
import { CommonTextButton, MainPageButtonContainer, MainPageButtonIcon, MainPageButtonInfo, MainPageButtonTextContainer, MainPageButtonTitle } from '../atoms/Buttons';
import { useDispatch } from 'react-redux';
import { setIsHamburgerClick } from '../redux/actions/isHamburgerClickAction';
import { ItemProps } from '../types/ItemProps';
import mapIcon from '../assets/images/icons/mapIcon.svg'
import helpIcon from '../assets/images/icons/helpIcon.svg'
import { useNavigate } from 'react-router-dom';

export const MainPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ProductSection = styled.section`
    width: 100%;
    margin: 12px 40px 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const SmallTitle = styled(Heading3Typo)`
    text-align: start;
    width: 80vw;
    margin: 12px 0px 12px 40px;
`
export const ItemsContainer = styled.section`
    width: 100%;
    max-width: 1100px;
    padding: 20px 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24%, auto));
    gap: 10px;
`
export const ButtonSection = styled.section`
    margin: 12px 40px 40px 40px;
    width: 100vw;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

export const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [itemData, setItemData] = useState<ItemProps[]>([]);

    useEffect(()=>{
        window.scrollTo({
            top: 0,
          });
    })

    useMemo(()=>{
        dispatch(setIsHamburgerClick(false));
        getMainPageItemData().then((res)=>{
            setItemData(res.data);
        })
    },[])

    const title: string = 'A/S를 최우선으로 하는 동의기계 입니다.';
    const body: string = '저희 회사는 최고 품질의 한약 기계를 판매합니다. \n 항상 질 높은 제품과 탁월한 서비스를 제공하여, \n 고객의 신뢰와 만족을 얻을 수 있도록 최선을 다하겠습니다.';

    const roadButtonClickHandler = () => {
        navigate('/road')
    }

    const telButtonClickHandler = () => {
        window.location.href = 'tel:010-5223-1151';
    }

    return (
        <MainPageContainer>
            <BigBanner title={title} body={body}/>
            <ProductSection>
                <CommonTextButton to='/products'>
                    <SmallTitle>제품소개</SmallTitle>
                </CommonTextButton>
                <ItemsContainer>
                {
                    itemData.map((e)=><Item id={e.id} name={e.name} imageUrl={e.imageUrl}/>)
                }
                </ItemsContainer>
            </ProductSection>
            <ButtonSection>
                <MainPageButtonContainer onClick={roadButtonClickHandler}>
                    <MainPageButtonIcon src={mapIcon}/>
                    <MainPageButtonTextContainer>
                    <MainPageButtonTitle>오시는길</MainPageButtonTitle>
                    <MainPageButtonInfo>오시는 길을 알려드립니다.</MainPageButtonInfo>
                    </MainPageButtonTextContainer>
                </MainPageButtonContainer>
                <MainPageButtonContainer onClick={telButtonClickHandler}>
                    <MainPageButtonIcon src={helpIcon}/>
                    <MainPageButtonTextContainer>
                    <MainPageButtonTitle>구입 및 상담신청</MainPageButtonTitle>
                    <MainPageButtonInfo>010-5223-1151</MainPageButtonInfo>
                    </MainPageButtonTextContainer>
                </MainPageButtonContainer>
            </ButtonSection>
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </MainPageContainer>
    );
};

export default MainPage;