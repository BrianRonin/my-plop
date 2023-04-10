import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C0Glajegolije, M0Glajegolije } from '.'

const meta = {
  title: 'Components/Group/C0Glajegolije',
  component: C0Glajegolije,
  tags: ['autodocs'],
  args: M0Glajegolije.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C0Glajegolije>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
