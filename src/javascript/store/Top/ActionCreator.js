import dispatcher from '../ApplicationDispatcher'
import * as actionTypes from './ActionTypes'

import Bar from 'modules/logic/Bar'

export default class TopActionCreator {
  constructor() {
    dispatcher.dispatch({
      actionType: actionTypes.INITIALIZE_STATE,
      state: {
        foo: false,
        bar: false
      }
    })
  }

  toggleFoo(currentState){
    dispatcher.dispatch({
      actionType: actionTypes.CLICK_FOO,
      state: {foo: !currentState}
    })
  }

  changeBar(inputValue){
    dispatcher.dispatch({
      actionType: actionTypes.CHANGE_BAR,
      state: {bar: Bar.check(inputValue)}
    })
  }
}
