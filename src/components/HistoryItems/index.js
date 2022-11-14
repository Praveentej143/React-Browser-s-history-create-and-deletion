import './index.css'

const HistoryItem = props => {
  const {itemList, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemList
  const onDelete = () => {
    deleteHistoryItem(id)
  }
  return (
    <li className="list-items">
      <div className="container">
        <div className="item-content-container">
          <p className="time">{timeAccessed}</p>
          <img src={`${logoUrl}`} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <div className="delete-btn-container">
          <button
            type="button"
            className="delete-logo"
            onClick={onDelete}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
