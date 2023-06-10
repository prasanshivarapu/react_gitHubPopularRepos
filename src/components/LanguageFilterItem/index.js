import './index.css'

const LanguageFilterItem = props => {
  const {filteredList, todo, btn} = props
  const {language, id} = filteredList
  const classname = btn ? 'button1' : ''
  const btning = () => {
    todo(id)
  }
  return (
    <div className="lang">
      <button type="button" className={`button ${classname}`} onClick={btning}>
        {language}
      </button>
    </div>
  )
}

export default LanguageFilterItem
