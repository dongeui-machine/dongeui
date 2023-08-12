import { Meta, Story } from "@storybook/react";
import SideBar from "./SideBar";

export default {
    title: 'components/Sidebar',
    component: SideBar,
} as Meta

const Template = () => <SideBar/>
export const SideBarTemplate = Template.bind({});