import { Meta, Story } from "@storybook/react";
import { ButtonProps, Buttons } from "./Buttons";
import { withRouter } from 'storybook-addon-react-router-v6';
export default {
    title: 'atoms/Button',
    component: Buttons,
    decorators: [withRouter],
} as Meta

const Template: Story<ButtonProps> = (args) => <Buttons {...args}/>

export const ButtonTemplate = Template.bind({});
ButtonTemplate.args = { text: { 
    nav: 'Nav Button', 
    navSub: 'Nav Sub Button', 
    mainPage: 'Main Page Button', 
    help: 'Help Button'} 
}
ButtonTemplate.story = {
    parameters: {
        reactRouter: {
            routePath: '/',
        }
    }
}