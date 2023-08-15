import { Meta, Story } from "@storybook/react";
import IntroCompany from "./IntroCompany";

export default {
    title: 'components/IntroCompany',
    component: IntroCompany
} as Meta

const Template: Story = () => <IntroCompany/>

export const IntroCompanyTemplate = Template.bind({});