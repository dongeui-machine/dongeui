import { Meta, Story } from "@storybook/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'components/Header',
    component: Header,
    decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>]
} as Meta

const Template: Story = (args) => <Header/>

export const HeaderTemplate = Template.bind({});
HeaderTemplate.args = {

}