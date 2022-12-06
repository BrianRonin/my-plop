import { renderTheme } from '../../../styles/render-theme'
import { Test01 } from './test01'
import { mock_test01 } from './M.test01'

describe('<Test01 />', () => {
  it('should render', () => {
    renderTheme(<Test01 { ...mock_test01 } />)
  })
})
