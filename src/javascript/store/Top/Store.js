import dispatcher from '../ApplicationDispatcher'
import * as actionTypes from './ActionTypes'

import {EventEmitter} from 'events'

const _state = {};

export default class TopStore extends EventEmitter {
  constructor() {
    super();

    dispatcher.register(payload => {
      switch(payload.actionType) {
        case actionTypes.INITIALIZE_STATE:
          this.initializeState(payload.state)
          break
        case actionTypes.CLICK_FOO:
          this.updateFoo(payload.state)
          break
        case actionTypes.CHANGE_BAR:
          this.updateBar(payload.state)
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
  initializeState(defaultState) {
    Object.assign(_state, defaultState)

    this.emit('change')
  }

  updateBar(newState) {
    Object.assign(_state, newState)
    console.log('top')
    this.emit('change')
  }

  updateFoo(newState) {
    Object.assign(_state, newState)

    this.emit('change')
  }

  // getter
  getAll() {
    return _state;
  }
}
