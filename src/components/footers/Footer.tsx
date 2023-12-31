import React from 'react';
import { styled } from 'styled-components';
import token from '../../tokens/tokens.json';
import { CompanyInfoType } from '../../types/CompanyInfo';

const { LightGray, smallText, Regular, Black } = token.global;

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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
export const FooterText = styled.span<{ isEnd: boolean }>`
    padding: 3px 20px;
    font-size: ${smallText.value}px;
    border-right: ${props=>props.isEnd?null:`${Regular.value}px solid ${Black.value}`};
    text-align: center;
`

export const Footer = ({ companyName, ownerName, tel, address } : CompanyInfoType) => {
    return (
        <FooterContainer>
            <FooterTextLine>
                <FooterText isEnd={false}>{ companyName }</FooterText>
                <FooterText isEnd={false}>대표 : { ownerName }</FooterText>
                <FooterText isEnd={false}>Tel : { tel }</FooterText>
                <FooterText isEnd={true}>주소 : { address }</FooterText>
            </FooterTextLine>
            <FooterTextLine>
                <FooterText isEnd={true}>COPYRIGHT(C) {companyName} ALL RIGHTS RESERVED.</FooterText>
            </FooterTextLine>
        </FooterContainer>
    );
};