// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onChangeActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const activeClassName = isActive ? 'active-tab tab-btn' : 'tab-btn'

  const onClickedTab = () => {
    onChangeActiveTabId(tabId)
  }

  return (
    <li className="list-container">
      <button onClick={onClickedTab} className={activeClassName} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
