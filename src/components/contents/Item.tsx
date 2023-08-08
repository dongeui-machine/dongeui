import React from 'react';
import { ItemProps } from '../../types/ItemProps';
import { styled } from 'styled-components';
import { BodyTextTypo } from '../../atoms/Typography';

export const ItemContainer = styled.section`
    margin: 8px;
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
    height: 260px;
`

export const Item = ({id, name, imageUrl}:ItemProps) => {
    return (
        <ItemContainer>
            <ItemImg src={imageUrl}/>
            <BodyTextTypo>{name}</BodyTextTypo>
        </ItemContainer>
    );
};
