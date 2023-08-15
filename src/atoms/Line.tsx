import React from 'react';
import { styled } from 'styled-components';
import tokens from '../tokens/tokens.json'

const globalTokens = tokens.global;

export const RegularLineDesign = styled.div`
    height: 3px;
    background-color: ${globalTokens.Gray.value};
`

export const Line = () => {
    return (
        <RegularLineDesign/>
    );
};

export default Line;