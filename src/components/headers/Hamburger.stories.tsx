import { Meta, Story } from "@storybook/react";
import { Hamburger } from "./Hamburger";

export default {
    title: 'components/Hamburger',
    component: Hamburger,
} as Meta

const Template: Story = (args) => <Hamburger/>
export const HamburgerTemplate = Template.bind({});
HamburgerTemplate.args = {
    
}