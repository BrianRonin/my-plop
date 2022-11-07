import { renderTheme } from '../../styles/render-theme'
import { ATest11 } from './a_test11'
import { mock_a_test11 } from './M.a_test11'

describe('<ATest11 />', () => {
  it('should render', () => {
    renderTheme(<ATest11 { ...mock_a_test11 } />)
  })
})
