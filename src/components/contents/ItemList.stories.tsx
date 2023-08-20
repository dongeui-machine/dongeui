import { Meta, Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ItemList } from "./ItemList";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from "../../redux/reducers";

const store = createStore(rootReducer);

export default {
    title: 'components/ItemList',
    component: ItemList,
    decorators: [(Story) => <Provider store={store}><MemoryRouter><Story/></MemoryRouter></Provider>]

}as Meta

const Template: Story = (args) => <ItemList/>

export const ItemTemplate = Template.bind({});
ItemTemplate.args = {

}