import { Meta, Story } from "@storybook/react";
import SideBar from "./SideBar";
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'components/Sidebar',
    component: SideBar,
    decorators: [(Story)=><MemoryRouter><Story/></MemoryRouter>]
} as Meta

const Template = () => <SideBar/>
export const SideBarTemplate = Template.bind({});