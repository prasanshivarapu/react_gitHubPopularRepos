import './index.css'

const RepositoryItem = props => {
  const {resultOut} = props
  const {avatharUrl, count, name, starCount, issuesCount} = resultOut

  return (
    <div className="contain">
      <img src={avatharUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <div className="open">
        <img
          className="img2"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
        />
        <p>{count}</p>
      </div>
      <div className="open">
        <img
          className="img2"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
        />
        <p>{starCount}</p>
      </div>
      <div className="open">
        <img
          className="img2"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="issues"
        />
        <p>{issuesCount}</p>
      </div>
    </div>
  )
}

export default RepositoryItem
