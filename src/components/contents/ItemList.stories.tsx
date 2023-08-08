import { Meta, Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ItemList } from "./ItemList";

export default {
    title: 'components/ItemList',
    component: ItemList,
    decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>]
}as Meta

const Template: Story = (args) => <ItemList/>

export const ItemTemplate = Template.bind({});
ItemTemplate.args = {

}