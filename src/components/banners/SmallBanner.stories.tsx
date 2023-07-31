import { Meta, Story } from "@storybook/react";
import { SmallBanner } from "./SmallBanner";

export default {
    title: 'components/Banners/SmallBanner',
    component: SmallBanner,
} as Meta

const Template: Story = () => <SmallBanner/>

export const SmallBannerTemplate = Template.bind({});
SmallBannerTemplate.args = {
    
}