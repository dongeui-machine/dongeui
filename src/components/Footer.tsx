import React from 'react';
import { styled } from 'styled-components';
import token from '../tokens/tokens.json';

const { LightGray, bodyText } = token.global;

export const FooterContainer = styled.footer`
    padding: 35px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${LightGray.value};
`

export const FooterTextLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const FooterText = styled.span<{ isEnd: boolean }>`
    padding: 10px 20px;
    font-size: ${bodyText.value}px;
    border-right: ${props=>props.isEnd?null:'2px solid #000'};
    text-align: center;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTextLine>
                <FooterText isEnd={false}>(주) 동의메디칼, 동의기계</FooterText>
                <FooterText isEnd={false}>대표 : 최정호</FooterText>
                <FooterText isEnd={false}>Tel : 010-5223-1151</FooterText>
                <FooterText isEnd={true}>주소 : 서울특별시 양천구 지양로9길 12 제일B/D 1층</FooterText>
            </FooterTextLine>
            <FooterTextLine>
                <FooterText isEnd={true}>COPYRIGHT(C) 동의메디칼 ALL RIGHTS RESERVED.</FooterText>
            </FooterTextLine>
        </FooterContainer>
    );
};

export default Footer;