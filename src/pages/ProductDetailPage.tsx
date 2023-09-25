import React, { useEffect } from 'react';
import { DongeuiMedicalPageContainer } from './ProductPage';
import { SmallBanner } from '../components/banners/SmallBanner';
import smallBanner_medical from '../assets/images/banner/smallBanner_medical.png'
import { Footer } from '../components/footers/Footer';
import ProductDetail from '../components/productDetail/ProductDetail';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams();

    useEffect(()=>{
        window.scrollTo({
            top: 0,
          });
    })


    return (
        <DongeuiMedicalPageContainer>
            <SmallBanner title='제품소개' imgUrl={`${smallBanner_medical}`}/>
            <ProductDetail productId={Number(id)}/>
            <Footer 
                companyName='(주) 동의메디칼, 동의기계'
                ownerName='최정호'
                tel='010-5223-1151'
                address='서울특별시 양천구 지양로9길 12 제일B/D 1층'/>
        </DongeuiMedicalPageContainer>
    );
};

export default ProductDetailPage;