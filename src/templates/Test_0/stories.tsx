import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C0Test, M0Test } from '.'

const meta = {
  title: 'Components/C0Test',
  component: C0Test,
  tags: ['autodocs'],
  args: M0Test.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C0Test>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
