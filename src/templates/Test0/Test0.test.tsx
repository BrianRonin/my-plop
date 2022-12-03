import { renderTheme } from '../../styles/render-theme'
import { Test0 } from './test0'
import { mock_test0 } from './M.test0'

describe('<Test0 />', () => {
  it('should render', () => {
    renderTheme(<Test0 { ...mock_test0 } />)
  })
})
