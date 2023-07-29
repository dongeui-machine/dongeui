import { Meta, Story } from "@storybook/react";
import { TitleProps, Typography } from "./Typography";

export default {
    title: 'atoms/Typography',
    component: Typography,
} as Meta

const Template: Story<TitleProps> = (args) => <Typography {...args}/>

export const TypographyTemplate = Template.bind({});
TypographyTemplate.args = { text: 'This is Typography' };