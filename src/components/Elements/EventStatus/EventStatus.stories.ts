import type { Meta, StoryObj } from '@storybook/react';
import EventStatus from './EventStatus';

const meta = {
    title: 'Elements/EventStatus',
    component: EventStatus,
    parameters: {
        layout: 'centered',
        design: {},
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EventStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Upcoming: Story = {
    args: {
        status: 'upcoming',
    },
};

export const Active: Story = {
    args: {
        status: 'active',
    },
};

export const Finished: Story = {
    args: {
        status: 'finished',
    },
};
