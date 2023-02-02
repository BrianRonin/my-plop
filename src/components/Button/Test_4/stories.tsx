import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { C4Test, M4Test } from '.'

const meta = {
  title: 'Components/Button/C4Test',
  component: C4Test,
  tags: ['autodocs'],
  args: M4Test.default,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof C4Test>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
