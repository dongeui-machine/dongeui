import { Meta } from "@storybook/react";
import { Hamburger } from "./Hamburger";
import { useState } from "react";
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'components/Hamburger',
    component: Hamburger,
    decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>]
} as Meta

const Template = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
    <>
        <button onClick={ () => { setIsVisible(!isVisible) } }>햄버거 띄우는 버튼</button>
        {
            isVisible?<Hamburger/>:null
        }
    </>);
}
export const HamburgerTemplate = Template.bind({});