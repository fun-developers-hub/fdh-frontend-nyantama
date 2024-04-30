import type { Meta, StoryObj } from '@storybook/react';
import EventCard from './EventCard';

const meta = {
    title: 'Elements/EventCard',
    component: EventCard,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EventCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'medium',
        icon_image_src: 'https://via.placeholder.com/150',
        date_start: new Date(),
        date_end: new Date(),
        event: 'Event',
        community: 'Community',
    },
};
