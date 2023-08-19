import { Meta, Story } from "@storybook/react";
import CarInfo from "./CarInfo";

export default {
    title: 'components/CarInfo',
    component: CarInfo
} as Meta

const Template: Story = (args) => <CarInfo/>

export const CarInfoTemplate = Template.bind({});
CarInfoTemplate.args = {
    
}