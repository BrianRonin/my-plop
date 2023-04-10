import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import { FafAfalkfjAflkaf, MFafAfalkfjAflkaf } from '.'

const meta = {
  title: 'Components/MyGroup/FafAfalkfjAflkaf',
  component: FafAfalkfjAflkaf,
  tags: ['autodocs'],
  args: MFafAfalkfjAflkaf.mock,
  parameters: {
    layout: 'centered',
    background: null,
  },
} satisfies Meta<typeof FafAfalkfjAflkaf>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
