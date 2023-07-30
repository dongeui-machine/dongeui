import { Meta, Story } from "@storybook/react";
import { Footer } from "./Footer";
import { CompanyInfoType } from "../../types/CompanyInfo";

export default {
    title: 'components/Footer',
    component: Footer,
} as Meta

const Template: Story<CompanyInfoType> = (args) => <Footer {...args}/>

export const FooterTemplate = Template.bind({});
FooterTemplate.args = {
    companyName: '(주) 동의메디칼, 동의기계',
    ownerName: '최정호',
    tel: '010-5223-1151',
    address: '서울특별시 양천구 지양로9길 12 제일B/D 1층'
}