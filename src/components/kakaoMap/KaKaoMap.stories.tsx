import { Meta, Story } from "@storybook/react";
import KaKaoMap from "./KaKaoMap";
import { KakaoMapProps } from "../../types/KakaoMapProps";

export default {
    title: 'components/KakaoMap',
    component: KaKaoMap,
} as Meta

const Template: Story<KakaoMapProps> = (args) => <KaKaoMap {...args}/>

export const KaKaoMapTemplate = Template.bind({});
KaKaoMapTemplate.args = {
    lat:3,
    lng:3,
}