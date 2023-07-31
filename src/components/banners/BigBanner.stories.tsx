import { Meta, Story } from "@storybook/react";
import {BigBanner} from './BigBanner';

export default {
    title: 'components/Banners/BigBanner',
    component: BigBanner,
} as Meta

const Template: Story = () => <BigBanner/>

export const BigBannerTemplate = Template.bind({});
BigBannerTemplate.args = {
    
}