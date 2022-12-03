import { renderTheme } from '../../../styles/render-theme'
import { Test00 } from './test00'
import { mock_test00 } from './M.test00'

describe('<Test00 />', () => {
  it('should render', () => {
    renderTheme(<Test00 { ...mock_test00 } />)
  })
})
