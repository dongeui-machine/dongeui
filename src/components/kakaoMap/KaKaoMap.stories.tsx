import { Meta, Story } from "@storybook/react";
import KaKaoMap from "./KaKaoMap";

export default {
    title: 'components/KakaoMap',
    component: KaKaoMap,
} as Meta

const Template: Story = () => <KaKaoMap/>

export const KaKaoMapTemplate = Template.bind({});
