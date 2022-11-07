import { renderTheme } from '../../styles/render-theme'
import { ATest08 } from './a_test08'
import { mock_a_test08 } from './M.a_test08'

describe('<ATest08 />', () => {
  it('should render', () => {
    renderTheme(<ATest08 { ...mock_a_test08 } />)
  })
})
