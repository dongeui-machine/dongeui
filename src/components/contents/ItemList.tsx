import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { ItemProps } from '../../types/ItemProps';
import { Item } from './Item';
import { getAllData } from '../../services/getItemData';

export const ItemListContainer = styled.section`
    margin: 40px;
    width: 100vw;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24%, auto));
    gap: 10px;
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