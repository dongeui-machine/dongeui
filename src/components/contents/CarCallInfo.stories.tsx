import { Meta, Story } from "@storybook/react";
import CarCallInfo from "./CarCallInfo";

export default {
    title: 'components/CarCallInfo',
    component: CarCallInfo
} as Meta

const Template: Story = () => <CarCallInfo/>

export const CarCallInfoTemplate = Template.bind({});
CarCallInfoTemplate.args = {
    
}