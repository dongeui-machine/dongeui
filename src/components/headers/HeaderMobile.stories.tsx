import { Meta, Story } from "@storybook/react";
import { HeaderMobile } from "./HeaderMobile";
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'components/HeaderMobile',
    component: HeaderMobile,
    decorators: [(Story)=><MemoryRouter><Story/></MemoryRouter>]
} as Meta

const Template: Story = (args) => <HeaderMobile/>

export const HeaderTemplate = Template.bind({});
HeaderTemplate.args = {

}