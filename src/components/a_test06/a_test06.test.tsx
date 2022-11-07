import { renderTheme } from '../../styles/render-theme'
import { ATest06 } from './a_test06'
import { mock_a_test06 } from './M.a_test06'

describe('<ATest06 />', () => {
  it('should render', () => {
    renderTheme(<ATest06 { ...mock_a_test06 } />)
  })
})
