// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails
  return (
    <li className="app-container">
      <img src={imageUrl} alt="imageUrl" className="img" />
      <h1 className="app-heading">{appName}</h1>
    </li>
  )
}
export default AppItem
