import { renderTheme } from '../../styles/render-theme'
import { TestDois } from './TestDois'
import { mock_test_dois } from './M.test_dois'

describe('<TestDois />', () => {
  it('should render', () => {
    renderTheme(<TestDois { ...mock_test_dois } />)
  })
})
