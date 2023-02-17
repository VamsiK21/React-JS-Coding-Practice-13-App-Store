// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails

  return (
    <li className="app-container">
      <img className="app-img" src={imageUrl} alt={appName} />
      <p className="appName-text">{appName}</p>
    </li>
  )
}

export default AppItem
