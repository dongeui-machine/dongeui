import React from 'react';
import { ItemProps } from '../../types/ItemProps';
import { styled } from 'styled-components';
import { BodyTextTypo } from '../../atoms/Typography';

export const ItemContainer = styled.section`
    margin: 0px 8px;
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const ItemImg = styled.img`
    width: 230px;
    height: 230px;
    object-fit:contain;
    border-radius: 8px;
    border: 2px solid rgba(0,0,0,0.1);
`

export const Item = ({id, name, imageUrl}:ItemProps) => {
    return (
        <ItemContainer>
            <ItemImg alt='제품이미지' src={imageUrl}/>
            <BodyTextTypo>{name}</BodyTextTypo>
        </ItemContainer>
    );
};
