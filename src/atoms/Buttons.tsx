import token from '../tokens/tokens.json';
import { styled } from 'styled-components';
import callIcon from '../assets/images/icons/callIcon.svg';
import helpIcon from '../assets/images/icons/helpIcon.svg';

const { PlainRadius, White, Heading2, bodyText, Small, smallText, Gray, DarkGray, LightGray, RegularEverywhereShadow, RegularShadow } = token.global;

export const NavButton = styled.button`
    border: 0;
    width: 200px;
    height: 60px;
    background-color: ${White.value};
    font-size: ${bodyText.value}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${Gray.value};
    }
`

export const NavSubButton = styled.button`
    border: 0;
    width: 155px;
    height: 40px;
    background-color: ${White.value};
    border-bottom: ${Small.value}px solid ${LightGray.value};
    color: ${DarkGray.value};
    font-size: ${smallText.value}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: ${Gray.value};
    }
`

export const MainPageButtonContainer = styled.button`
    width: 630px;
    height: 224px;
    border: 0;
    background-color: ${White.value};
    box-shadow: ${
        RegularEverywhereShadow.value.x}px 
        ${RegularEverywhereShadow.value.y}px 
        ${RegularEverywhereShadow.value.blur}px 
        ${RegularEverywhereShadow.value.spread}px 
        ${RegularEverywhereShadow.value.color};
    border-radius: ${PlainRadius.value}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: ${Heading2.value}px;
`

export const MainPageButtonIcon = styled.img`
    margin-right: 20px;
`

export const HelpButton = styled.button`
    width: 388px;
    height: 87px;
    border: 0;
    background-color: ${White.value};
    border-radius: ${PlainRadius.value}px;
    font-size: ${bodyText.value}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: ${RegularShadow.value.x}px ${RegularShadow.value.y}px  ${RegularShadow.value.blur}px ${RegularShadow.value.spread}px ${RegularShadow.value.color};
    cursor: pointer;
`

export const HelpButtonIcon = styled.img`
    margin-right: 20px;
    width: 50px;
`

export type ButtonProps = {
    text: { nav:string, navSub: string, mainPage: string, help: string };
}

export const Buttons = ({ text } : ButtonProps) => {
    return (
    <div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoRows: '1fr', placeItems: 'center' } }>
        <NavButton>{ text.nav }</NavButton>
        <NavSubButton>{ text.navSub }</NavSubButton>
        <HelpButton>
            <HelpButtonIcon src={helpIcon}/>
            { text.help }
        </HelpButton>
        <MainPageButtonContainer>
            <MainPageButtonIcon src={callIcon}/>
            { text.mainPage }
        </MainPageButtonContainer>
    </div>
    );
}