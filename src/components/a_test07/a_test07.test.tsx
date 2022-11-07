import { renderTheme } from '../../styles/render-theme'
import { ATest07 } from './a_test07'
import { mock_a_test07 } from './M.a_test07'

describe('<ATest07 />', () => {
  it('should render', () => {
    renderTheme(<ATest07 { ...mock_a_test07 } />)
  })
})
