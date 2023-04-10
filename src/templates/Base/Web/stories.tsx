import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { Web, MWeb } from '.'

const meta = {
  title: 'Components/Base/Web',
  component: Web,
  tags: ['autodocs'],
  args: MWeb.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof Web>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
