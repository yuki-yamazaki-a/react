import dispatcher from '../ApplicationDispatcher'
import * as actionTypes from './ActionTypes'

import Bar from 'modules/logic/Bar'

export default class SearchBoxAction {
  constructor() {
  }

  openAreaSearchPanel() {
    dispatcher.dispatch({
      actionType: actionTypes.OPEN_AREA_SEARCH_PANEL
    })
  }

  closeAreaSearchPanel() {
    dispatcher.dispatch({
      actionType: actionTypes.CLOSE_AREA_SEARCH_PANEL
    })
  }

  openPeopleSearchPanel() {
    dispatcher.dispatch({
      actionType: actionTypes.OPEN_PEOPLE_SEARCH_PANEL
    })
  }

  closePeopleSearchPanel() {
    dispatcher.dispatch({
      actionType: actionTypes.CLOSE_PEOPLE_SEARCH_PANEL
    })
  }

  changeBar(inputValue) {
    dispatcher.dispatch({
      actionType: actionTypes.SEARCH_CHANGE_BAR,
      bar: Bar.check(inputValue)
    })
  }
}
