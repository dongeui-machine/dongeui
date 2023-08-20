import React from 'react';
import { styled } from 'styled-components';
import { BodyTextTypo, Heading3Typo } from '../../atoms/Typography';
import { HelpButton, HelpButtonIcon } from '../../atoms/Buttons';
import callButton from '../../assets/images/icons/callIcon.svg'
import kakaotalkIcon from '../../assets/images/icons/kakaotalkIcon.svg'
import tokens from '../../tokens/tokens.json'
import { useSelector } from 'react-redux';
import { RootState } from '../../types/ReducerReturn';

const globalTokens = tokens.global;

export const CarCallInfoContainer = styled.section<{browserWidth:number}>`
    margin: 24px;
    max-width: 90vw;
    height: ${(props)=>props.browserWidth>950?'580px':'fit-content'};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`
export const CarCallInfoHeading = styled(Heading3Typo)`
    width: 90vw;
    max-width: 400px;
    margin: 12px 12px 12px 40px;
    text-align: start;
`
export const CarCallHelpInfoContainer = styled.section`
    margin: 24px 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-grow: 1;
`
export const CarCallButton = styled(HelpButton)`
    width: 350px;
    max-width: 90vw;
    margin: 12px;
    padding: 0px 40px;
    display: flex;
    flex-direction: row;
    transition: 300ms;
    &:hover {
        background-color: ${globalTokens.LightGray.value};
    }
`
export const CarCallHelpButtonIcon = styled(HelpButtonIcon)`
    
`
export const CarCallHelpButtonInfoContainer = styled.a`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: ${globalTokens.Black.value};
`
export const CarCallHelpButtonTitle = styled(BodyTextTypo)`
`
export const CarCallHelpButtonPhoneNumber = styled(BodyTextTypo)`
    color: ${globalTokens.Primary.value};
`
export const CarCallInfo = () => {
    const browserWidth = useSelector((state:RootState)=>state.browserWidthReducer.width);

    return (
        <CarCallInfoContainer browserWidth={browserWidth}>
            <CarCallInfoHeading>견적 문의</CarCallInfoHeading>
            <CarCallHelpInfoContainer>
                <CarCallButton>
                    <CarCallHelpButtonIcon src={callButton}/>
                    <CarCallHelpButtonInfoContainer
                        href='tel:010-5223-1151'>
                        <CarCallHelpButtonTitle>전화로 문의하기</CarCallHelpButtonTitle>
                        <CarCallHelpButtonPhoneNumber>010-5223-1151</CarCallHelpButtonPhoneNumber>
                    </CarCallHelpButtonInfoContainer>
                </CarCallButton>
                <CarCallButton>
                    <CarCallHelpButtonIcon src={kakaotalkIcon}/>
                    <CarCallHelpButtonInfoContainer
                        href=''>
                        <CarCallHelpButtonTitle>카카오톡으로 문의하기</CarCallHelpButtonTitle>
                        <CarCallHelpButtonPhoneNumber>010-5223-1151</CarCallHelpButtonPhoneNumber>
                    </CarCallHelpButtonInfoContainer>
                </CarCallButton>
            </CarCallHelpInfoContainer>
        </CarCallInfoContainer>
    );
};

export default CarCallInfo;