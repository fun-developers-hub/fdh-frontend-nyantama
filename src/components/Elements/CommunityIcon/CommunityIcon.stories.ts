import type { Meta, StoryObj } from '@storybook/react';
import CommunityIcon from './CommunityIcon';

const meta = {
    title: 'Elements/CommunityIcon',
    component: CommunityIcon,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CommunityIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon_image_src: 'https://via.placeholder.com/150',
    },
};
