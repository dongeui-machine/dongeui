import { Meta, Story } from "@storybook/react";
import Header from "./Header";

export default {
    title: 'components/Header',
    component: Header,
} as Meta

const Template: Story = (args) => <Header/>

export const HeaderTemplate = Template.bind({});
HeaderTemplate.args = {

}