import React from 'react'
import BarInput from '../partial/BarInput'

let Store, ActionCreator

export default class HeaderSearchBox extends React.Component {
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
      <div className="header-search-box">
        <p className="header-search-box__title">header</p>
        <ul className="header-search-box__list">
          <li className="header-search-box__item">
            <BarInput
              placeholder={'Header Bar: Enter something.'}
              handleChangeBar={ActionCreator.changeBar}
            />
            <dt>Header Bar is reached to 5?</dt>
            <dd>{this.state.bar? 'YES' : 'NO'}</dd>
          </li>
          <li className="header-search-box__item">
            <a className="header-search-box__choose-the-condition--area" href='#' onClick={(e)=>this.openAreaSearchPanel(e)}>
              すべての行き先
            </a>
          </li>
          <li className="header-search-box__item">
            <a className="header-search-box__choose-the-condition--people" href='#' onClick={(e)=>this.openPeopleSearchPanel(e)}>
              人数
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
