import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { ItemProps } from '../../types/ItemProps';
import { Item } from './Item';
import { getAllData } from '../../services/getItemData';

export const ItemListContainer = styled.section`
    margin: 40px;
    width: 90vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ItemList = () => {
    const [ itemData, setItemData ] = useState<ItemProps[]>([]);

    useMemo(()=>{
        getAllData().then((res)=>{
            setItemData(res);
        })
    },[]);

    return (
        <ItemListContainer>
        {
            itemData.map((e)=><Item id={e.id} name={e.name} imageUrl={e.imageUrl}/> )
        }
        </ItemListContainer>
    );
};

export default ItemList;