import dispatcher from '../ApplicationDispatcher'
import * as actionTypes from './ActionTypes'

import {EventEmitter} from 'events'

const _state = {
  bar: '',
  areaSearchPanel: {
      isDisplay: false
  },
  peopleSearchPanel: {
      isDisplay: false
  }
}

export default class SearchBoxStore extends EventEmitter {
  constructor() {
    super()

    dispatcher.register(payload => {
      switch (payload.actionType) {
        case actionTypes.OPEN_AREA_SEARCH_PANEL:
          this.openAreaSearchPanel()
          break
        case actionTypes.CLOSE_AREA_SEARCH_PANEL:
          this.closeAreaSearchPanel()
          break
        case actionTypes.OPEN_PEOPLE_SEARCH_PANEL:
          this.openPeopleSearchPanel()
          break
        case actionTypes.CLOSE_PEOPLE_SEARCH_PANEL:
          this.closePeopleSearchPanel()
          break
        case actionTypes.SEARCH_CHANGE_BAR:
          this.updateBar(payload.bar)
          break
        default:
          break
      }
    })
  }


  // events
  addChangeListener(callback) {
    return this.on('change', callback)
  }

  // mutations
  openAreaSearchPanel() {
    _state.areaSearchPanel.isDisplay = true

    this.emit('change')
  }

  closeAreaSearchPanel() {
    _state.areaSearchPanel.isDisplay = false

    this.emit('change')
  }

  openPeopleSearchPanel() {
    _state.peopleSearchPanel.isDisplay = true

    this.emit('change')
  }

  closePeopleSearchPanel() {
    _state.peopleSearchPanel.isDisplay = false

    this.emit('change')
  }

  updateBar(newState) {
    _state.bar = newState

    this.emit('change')
  }

  // getter
  getAll() {
    return _state
  }
}
