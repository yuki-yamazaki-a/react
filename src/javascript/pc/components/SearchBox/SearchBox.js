import React from 'react'

let Store, ActionCreator

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    Store = props.Store
    ActionCreator = props.ActionCreator
    this.state = Store.getAll()
  }
  componentDidMount() {
    Store.addChangeListener(() => {
      this.setState(Store.getAll())
    })
  }
  openAreaSearchPanel(e) {
    e.preventDefault()
    ActionCreator.openAreaSearchPanel()
  }
  openPeopleSearchPanel(e) {
    e.preventDefault()
    ActionCreator.openPeopleSearchPanel()
  }
  render() {
    return (
      <div className="search-box">
        <p>検索ボックス</p>
        <a className="search-box__choose-the-condition--area" href='#' onClick={(e)=>this.openAreaSearchPanel(e)}>
          すべての行き先
        </a>
        <a className="search-box__choose-the-condition--people" href='#' onClick={(e)=>this.openPeopleSearchPanel(e)}>
          人数
        </a>
      </div>
    )
  }
}
