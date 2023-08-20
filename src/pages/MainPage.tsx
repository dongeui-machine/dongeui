import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { BigBanner } from '../components/banners/BigBanner';
import { Footer } from '../components/footers/Footer';
import { Heading3Typo } from '../atoms/Typography';
import { getMainPageItemData } from '../services/getItemData';
import { Item } from '../components/contents/Item';
import { CommonTextButton } from '../atoms/Buttons';
import { useDispatch } from 'react-redux';
import { setIsHamburgerClick } from '../redux/actions/isHamburgerClickAction';
import { ItemProps } from '../types/ItemProps';

export const MainPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ProductSection = styled.section`
    width: 100%;
    margin: 12px 40px 40px 40px;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const MainPage = () => {
    const dispatch = useDispatch();
    const [itemData, setItemData] = useState<ItemProps[]>([]);

    useMemo(()=>{
        dispatch(setIsHamburgerClick(false));
        getMainPageItemData().then((res)=>{
            setItemData(res);
        })
    },[])

    const title: string = 'A/S를 최우선으로 하는 동의기계 입니다.';
    const body: string = '저희 회사는 최고 품질의 한약 기계를 판매합니다. \n 항상 질 높은 제품과 탁월한 서비스를 제공하여, \n 고객의 신뢰와 만족을 얻을 수 있도록 최선을 다하겠습니다.';

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
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </MainPageContainer>
    );
};

export default MainPage;