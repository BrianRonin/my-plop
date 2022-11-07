import { renderTheme } from '../../styles/render-theme'
import { ATest15 } from './a_test15'
import { mock_a_test15 } from './M.a_test15'

describe('<ATest15 />', () => {
  it('should render', () => {
    renderTheme(<ATest15 { ...mock_a_test15 } />)
  })
})
