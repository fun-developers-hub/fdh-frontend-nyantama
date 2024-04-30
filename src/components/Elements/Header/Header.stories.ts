import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
    title: 'Elements/Header',
    component: Header,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
