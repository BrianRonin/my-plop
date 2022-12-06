import { renderTheme } from '../../../styles/render-theme'
import { Test9 } from './test9'
import { mock_test9 } from './M.test9'

describe('<Test9 />', () => {
  it('should render', () => {
    renderTheme(<Test9 { ...mock_test9 } />)
  })
})
