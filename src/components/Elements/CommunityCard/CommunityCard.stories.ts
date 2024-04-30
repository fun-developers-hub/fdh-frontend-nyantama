import type { Meta, StoryObj } from '@storybook/react';
import CommunityCard from './CommunityCard';

const meta = {
    title: 'Elements/CommunityCard',
    component: CommunityCard,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CommunityCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        community: 'Community',
        icon_image_src: 'https://via.placeholder.com/150',
        description: 'This is a community',
    },
};
