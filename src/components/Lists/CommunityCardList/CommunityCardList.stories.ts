import type { Meta, StoryObj } from '@storybook/react';
import CommunityCardList from './CommunityCardList';

const meta = {
    title: 'Elements/CommunityCardList',
    component: CommunityCardList,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CommunityCardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CommunityNum2: Story = {
    args: {
        communities: [
            {
                community: 'Community 1',
                icon_image_src: 'https://via.placeholder.com/150',
                description: 'This is a description for Community 1.'
            },
            {
                community: 'Community 2',
                icon_image_src: 'https://via.placeholder.com/150',
                description: 'This is a description for Community 2.'
            },
        ]
    }
};

export const CommunityNum5: Story = {
    args: {
        communities: [
            {
                community: 'Community 1',
                icon_image_src: 'https://via.placeholder.com/150',
                description: 'This is a description for Community 1.'
            },
            {
                community: 'Community 2',
                icon_image_src: 'https://via.placeholder.com/150',
                description: 'This is a description for Community 2.'
            },
            {
                community: 'Community 3',
                icon_image_src: 'https://via.placeholder.com/150',
                description: 'This is a description for Community 3.'
            },
            {
                community: 'Community 4',
                icon_image_src: 'https://via.placeholder.com/150',
                description: 'This is a description for Community 4.'
            },
            {
                community: 'Community 5',
                icon_image_src: 'https://via.placeholder.com/150',
                description: 'This is a description for Community 5.'
            }
        ]
    }
};
