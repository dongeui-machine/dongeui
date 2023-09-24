import React from 'react';
import { ItemProps, ItemContainerProps, ItemImgProps, ItemNameTypoProps } from '../../types/ItemProps';
import { styled } from 'styled-components';
import { BodyTextTypo } from '../../atoms/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/ReducerReturn';
import token from '../../tokens/tokens.json'
import { useNavigate } from 'react-router-dom';

const { smallText, bodyText, Gray } = token.global;

export const ItemContainer = styled.section<ItemContainerProps>`
    width: ${(props)=>props.browserWidth>600?'240px':'180px'};
    max-width: 100%;
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    transition: 300ms;
    &:hover {
        color: ${Gray.value}
    }
`
export const ItemImg = styled.img<ItemImgProps>`
    width: 100%;
    height: ${(props)=>props.browserWidth>600?'210px':'120px'};
    object-fit: contain;
    border-radius: 8px;
    border: 2px solid rgba(0,0,0,0.1);
`
export const ItemNameTypo = styled(BodyTextTypo)<ItemNameTypoProps>`
    font-size: ${(props)=>props.browserWidth>800?`${bodyText.value}px`:`${smallText.value}px`};
    width: 100%;
`
export const Item = ({id, name, imageUrl}:ItemProps) => {
    const navigate = useNavigate();
    const deviceWidth = useSelector((state:RootState)=>state.browserWidthReducer.width);

    const itemClickHandler = (e:React.MouseEvent<HTMLElement>) => {
        navigate(`${id}`);
    }

    return (
        <ItemContainer browserWidth={deviceWidth} onClick={itemClickHandler}>
            <ItemImg browserWidth={deviceWidth} alt='제품이미지' src={imageUrl}/>
            <ItemNameTypo browserWidth={deviceWidth}>{name}</ItemNameTypo>
        </ItemContainer>
    );
};
