import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C0Algkjgalk, M0Algkjgalk } from '.'

const meta = {
  title: 'Components/Group/C0Algkjgalk',
  component: C0Algkjgalk,
  tags: ['autodocs'],
  args: M0Algkjgalk.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C0Algkjgalk>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
