import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PositiveTextButton } from '../../atoms/Buttons';
import { useNavigate } from 'react-router-dom';
import { getItemDetailData } from '../../services/getItemData';
import { BodyTextTypo } from '../../atoms/Typography';

export const ProductDetailContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`
export const ProductDetailNavButtonContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
`
export const ProductDetailMainInfoContainer = styled.main`
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: row;
    align-items: start;
    flex-wrap: nowrap;
    gap: 10px;
`
export const ProductImageContainer = styled.section`
    width: 100%;
    max-width: 450px;
`
export const ProductImage = styled.img`
    width: 100%;
    object-fit: contain;
`
export const ProductInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`
export const ProductTitleTypo = styled(BodyTextTypo)`
    font-weight: bold;
    text-align: start;
`
export type ProductDetailProps = {
    productId: number;
}

const ProductDetail = ({productId} : ProductDetailProps) => {
    const navigate = useNavigate();
    const [ productInfo, setProductInfo ] = useState({
        id: 0,
        name: '',
        brand: '',
        category: '',
        imageUrl: '',
        detailImageUrl: '',
    });

    useEffect(()=>{
        getItemDetailData(productId).then((res)=>{
            setProductInfo(res.data);
        })
    },[]);

    return (
        <ProductDetailContainer>
            <ProductDetailNavButtonContainer>
                <PositiveTextButton onClick={()=>{ navigate(-1) }}>
                    {` <  목록 보기`}
                </PositiveTextButton>
            </ProductDetailNavButtonContainer>
            <ProductDetailMainInfoContainer>
                <ProductImageContainer>
                    <ProductImage src={productInfo.detailImageUrl}/>
                </ProductImageContainer>
                <ProductInfoContainer>
                    <ProductTitleTypo>{ productInfo.name }</ProductTitleTypo>
                </ProductInfoContainer>
            </ProductDetailMainInfoContainer>
        </ProductDetailContainer>
    );
};

export default ProductDetail;