import { Meta, Story } from "@storybook/react";
import { SmallBanner } from "./SmallBanner";
import { SmallBannerProps } from "../../types/SmallBannerProps";

export default {
    title: 'components/Banners/SmallBanner',
    component: SmallBanner,
} as Meta

const Template: Story<SmallBannerProps> = (args) => <SmallBanner {...args}/>

export const SmallBannerTemplate = Template.bind({});
SmallBannerTemplate.args = {
    title: '동의메디칼',
    subTitle: '최고 품질의 한약 기계를 판매합니다.'
}