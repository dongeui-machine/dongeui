import { Meta, Story } from "@storybook/react";
import {BigBanner} from './BigBanner';
import { BigBannerProps } from "../../types/BigBannerProps";

export default {
    title: 'components/Banners/BigBanner',
    component: BigBanner,
} as Meta

const Template: Story<BigBannerProps> = (args) => <BigBanner {...args}/>

export const BigBannerTemplate = Template.bind({});
BigBannerTemplate.args = {
    title: 'A/S를 최우선으로 하는 동의앤피 입니다.',
    body: '저희 회사는 최고 품질의 한약 기계를 전문으로 제조하고 공급합니다. \n 항상 질 높은 제품과 탁월한 서비스를 제공하여, \n 고객의 신뢰와 만족을 얻을 수 있도록 최선을 다하겠습니다.'
}