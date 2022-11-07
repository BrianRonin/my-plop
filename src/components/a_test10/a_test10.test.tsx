import { renderTheme } from '../../styles/render-theme'
import { ATest10 } from './a_test10'
import { mock_a_test10 } from './M.a_test10'

describe('<ATest10 />', () => {
  it('should render', () => {
    renderTheme(<ATest10 { ...mock_a_test10 } />)
  })
})
