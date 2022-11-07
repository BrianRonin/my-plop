import { renderTheme } from '../../styles/render-theme'
import { ATest12 } from './a_test12'
import { mock_a_test12 } from './M.a_test12'

describe('<ATest12 />', () => {
  it('should render', () => {
    renderTheme(<ATest12 { ...mock_a_test12 } />)
  })
})
