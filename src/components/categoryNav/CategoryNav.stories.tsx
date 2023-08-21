import { Meta, Story } from "@storybook/react";
import CategoryNav from "./CategoryNav";

export default {
    title: 'components/CategoryNav',
    component: CategoryNav,
} as Meta

const Template: Story = () => <CategoryNav/>

export const CategoryNavTemplate = Template.bind({});
CategoryNavTemplate.args = {
    
}