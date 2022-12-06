import { renderTheme } from '../../../styles/render-theme'
import { Test4 } from './test4'
import { mock_test4 } from './M.test4'

describe('<Test4 />', () => {
  it('should render', () => {
    renderTheme(<Test4 { ...mock_test4 } />)
  })
})
