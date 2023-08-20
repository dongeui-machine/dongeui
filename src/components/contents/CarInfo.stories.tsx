import { Meta, Story } from "@storybook/react";
import CarInfo from "./CarInfo";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from "../../redux/reducers";

const store = createStore(rootReducer);

export default {
    title: 'components/CarInfo',
    component: CarInfo,
    decorators: [
        (Story) => <Provider store={store}><MemoryRouter><Story/></MemoryRouter></Provider>]
} as Meta

const Template: Story = () => <CarInfo/>

export const CarInfoTemplate = Template.bind({});
CarInfoTemplate.args = {
    
}