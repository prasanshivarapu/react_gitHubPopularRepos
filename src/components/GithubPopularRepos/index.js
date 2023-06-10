import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

const apple = {
  initial: 'initial',
  loading: 'loading',
  fail: 'fail',
}

class GithubPopularRepos extends Component {
  state = {shi: '', ide: languageFiltersData[0].id, List: []}

  componentDidMount() {
    this.getresult()
  }

  getresult = async () => {
    const {ide} = this.state

    this.setState({shi: apple.loading})
    const Url = `https://apis.ccbp.in/popular-repos?language=${ide}`

    const response = await fetch(Url)
    const data = await response.json()
    if (data === undefined) {
      this.setState({shi: apple.fail})
    } else {
      this.setState({shi: apple.initial})
    }
    const updateData = data.popular_repos.map(each => ({
      avatharUrl: each.avatar_url,
      count: each.forks_count,
      name: each.name,
      starCount: each.stars_count,
      issuesCount: each.issues_count,
    }))
    this.setState({List: updateData})
  }

  todo = id => {
    this.setState({ide: id}, this.getresult)
  }

  fail = () => (
    <div>
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <h1>Somthing went wrong</h1>
    </div>
  )

  outPut = () => {
    const {List} = this.state
    return (
      <div className="repo">
        {List.map(each => (
          <RepositoryItem resultOut={each} key={each.name} />
        ))}
      </div>
    )
  }

  prasan = () => {
    const {shi} = this.state

    switch (shi) {
      case apple.initial:
        return this.outPut()
      case apple.fail:
        return this.fail()
      case apple.loading:
        return this.load()

      default:
        return null
    }
  }

  load = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {ide} = this.state

    return (
      <div className="pop">
        <h1>Populor</h1>
        <div className="data">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              filteredList={each}
              key={each.id}
              todo={this.todo}
              btn={ide === each.id}
            />
          ))}
        </div>
        <div className="loader">{this.prasan()}</div>
      </div>
    )
  }
}

export default GithubPopularRepos
