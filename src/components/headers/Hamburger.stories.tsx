import { Meta } from "@storybook/react";
import { Hamburger } from "./Hamburger";
import { useState } from "react";

export default {
    title: 'components/Hamburger',
    component: Hamburger,
} as Meta

const Template = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
    <>
        <button onClick={ () => { setIsVisible(!isVisible) } }>햄버거 띄우는 버튼</button>
        {
            isVisible?<Hamburger isHamburgerClick={isVisible}/>:null
        }
    </>);
}
export const HamburgerTemplate = Template.bind({});