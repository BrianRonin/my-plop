import { renderTheme } from '../../styles/render-theme'
import { ATest13 } from './a_test13'
import { mock_a_test13 } from './M.a_test13'

describe('<ATest13 />', () => {
  it('should render', () => {
    renderTheme(<ATest13 { ...mock_a_test13 } />)
  })
})
