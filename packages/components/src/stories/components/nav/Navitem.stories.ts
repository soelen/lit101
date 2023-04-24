import type { Meta, StoryObj } from '@storybook/web-components';
import type { ButtonProps } from './Navitem';
import { Button } from './Navitem';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Nav/Navitem',
  tags: [ 'autodocs' ],
  render: (args) => Button(args),
  argTypes: {
    onClick: { action: 'onClick' },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/web-components/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Active: Story = {
  args: {
    active: true,
    label: 'Button',
  },
};

export const Icon: Story = {
  args: {
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
  },
};
