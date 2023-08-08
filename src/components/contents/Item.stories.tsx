import { Meta, Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Item } from "./Item";
import { ItemProps } from "../../types/ItemProps";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from "../../redux/reducers";

const store = createStore(rootReducer);

export default {
    title: 'components/Item',
    component: Item,
    decorators: [
        (Story) => <Provider store={store}><MemoryRouter><Story/></MemoryRouter></Provider>]
}as Meta

const Template: Story<ItemProps> = (args) => <Item {...args}/>

export const ItemTemplate = Template.bind({});
ItemTemplate.args = {
    id: 1,
    name: '명의(스파우트)(90X150)기본수량1000매 (쫄대 별도구매)',
    imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/23/01/01/1090/1090_main_098.jpg'
}