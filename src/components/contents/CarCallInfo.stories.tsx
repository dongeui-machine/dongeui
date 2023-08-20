import { Meta, Story } from "@storybook/react";
import CarCallInfo from "./CarCallInfo";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from "../../redux/reducers";

const store = createStore(rootReducer);

export default {
    title: 'components/CarCallInfo',
    component: CarCallInfo,
    decorators: [
        (Story) => <Provider store={store}><MemoryRouter><Story/></MemoryRouter></Provider>]
} as Meta

const Template: Story = () => <CarCallInfo/>

export const CarCallInfoTemplate = Template.bind({});
CarCallInfoTemplate.args = {
    
}