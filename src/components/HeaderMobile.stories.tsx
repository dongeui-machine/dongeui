import { Meta, Story } from "@storybook/react";
import { HeaderMobile } from "./HeaderMobile";

export default {
    title: 'components/HeaderMobile',
    component: HeaderMobile,
} as Meta

const Template: Story = (args) => <HeaderMobile/>

export const HeaderTemplate = Template.bind({});
HeaderTemplate.args = {

}