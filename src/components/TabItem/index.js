// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, UpdateTabButton} = props
  const {displayText, tabId} = tabDetails
  const onchangeTab = () => {
    UpdateTabButton(tabId)
  }
  const changeElementClassName = isActive ? 'btn-color-change' : ''
  return (
    <li className="container">
      <button
        className={`button ${changeElementClassName}`}
        type="button"
        onClick={onchangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
