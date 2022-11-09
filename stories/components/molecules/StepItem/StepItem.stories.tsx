import {Meta} from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/molecules/StepItem";

export default {
    title: 'Components/Molecules/StepItem',
    component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: '1. Top Up',
    icon: 'step1',
    desc1: 'Pilih Salah Satu Game',
    desc2: 'Pilih Salah Satu Game'
};