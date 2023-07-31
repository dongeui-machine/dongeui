import { Meta, Story } from "@storybook/react";
import { ImageSlider } from "./ImageSlider";
import { SliderProps } from "../../types/SliderProps";
import mainBannerProductImg1 from "../../assets/images/banner/mainBannerProductImg1.png"
import mainBannerProductImg2 from "../../assets/images/banner/mainBannerProductImg2.png"
import mainBannerProductImg3 from "../../assets/images/banner/mainBannerProductImg3.png"

export default {
    title: 'components/Banners/ImageSlider',
    component: ImageSlider,
} as Meta

const Template: Story<SliderProps> = (args) => <ImageSlider {...args}/>

export const ImageSliderTemplate = Template.bind({});
ImageSliderTemplate.args = {
    imgUrl1: mainBannerProductImg1,
    imgUrl2: mainBannerProductImg2,
    imgUrl3: mainBannerProductImg3,
}