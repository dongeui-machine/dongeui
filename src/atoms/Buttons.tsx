import token from '../tokens/tokens.json';
import { styled } from 'styled-components';
import callIcon from '../assets/images/icons/callIcon.svg';
import helpIcon from '../assets/images/icons/helpIcon.svg';
import { Link } from 'react-router-dom';
import { BodyTextTypo, Heading3Typo } from './Typography';

const { PlainRadius, White, Black, Primary, Danger, bodyText, Small, smallText, Gray, DarkGray, LightGray, RegularEverywhereShadow, RegularShadow } = token.global;

export const NavButton = styled(Link)`
    text-decoration-line : none;
    text-decoration : none;
    color: ${Black.value};
    border: 0;
    width: 15vw;
    min-width: 80px;
    height: 60px;
    background-color: ${White.value};
    font-size: ${bodyText.value}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 300ms;
    &:hover {
        color: ${Gray.value};
    }
    &:active {
        color: ${LightGray.value};
        transition: 0s;
    }
`

export const NavSubButton = styled(Link)`
    text-decoration-line : none;
    text-decoration : none;
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
    transition: 300ms;
    &:hover {
        background-color: ${LightGray.value};
    }
    &:active {
        background-color: ${Gray.value};
        color: ${White.value};
        transition: 0s;
    }
`
export const MainPageButtonContainer = styled.button`
    margin: 24px;
    width: 400px;
    height: 150px;
    border: 0;
    background-color: ${White.value};
    box-shadow: ${RegularEverywhereShadow.value.x}px 
        ${RegularEverywhereShadow.value.y}px 
        ${RegularEverywhereShadow.value.blur}px 
        ${RegularEverywhereShadow.value.spread}px 
        ${RegularEverywhereShadow.value.color};
    border-radius: ${PlainRadius.value}px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    transition: 300ms;
    &:hover {
        background-color: ${LightGray.value};
    }
`
export const MainPageButtonIcon = styled.img`
    width: 20%;
    max-width: 50px;
`
export const MainPageButtonTextContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
`
export const MainPageButtonTitle = styled(Heading3Typo)`
`
export const MainPageButtonInfo = styled(BodyTextTypo)`
    color: ${Gray.value};
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
export const CommonTextButton = styled(Link)`
    text-decoration-line : none;
    text-decoration : none;
    color: ${Black.value};
    cursor: pointer;
    transition: 300ms;
    &:hover {
        color: ${Gray.value};
    }
`
export const NegativeTextButton = styled.button`
    color: ${Danger.value};
    font-size: ${bodyText.value}px;
`
export const PositiveTextButton = styled.button`
    color: ${Primary.value};
    font-size: ${bodyText.value}px;
    transition: 300ms;
    &:hover {
        opacity: 0.5;
    }
`
export type ButtonProps = {
    text: { nav:string, navSub: string, mainPage: string, help: string };
}

export const Buttons = ({ text } : ButtonProps) => {
    return (
        <div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoRows: '1fr', placeItems: 'center' } }>
            <NavButton to='/'>{ text.nav }</NavButton>
            <NavSubButton to='/'>{ text.navSub }</NavSubButton>
            <HelpButton>
                <HelpButtonIcon src={helpIcon}/>
                <MainPageButtonTextContainer>
                    { text.help }
                </MainPageButtonTextContainer>
            </HelpButton>
            <MainPageButtonContainer>
                <MainPageButtonIcon src={callIcon}/>
                <MainPageButtonTitle>{ text.mainPage }</MainPageButtonTitle>
            </MainPageButtonContainer>
            <CommonTextButton to='/'>Button</CommonTextButton>
        </div>
    );
}