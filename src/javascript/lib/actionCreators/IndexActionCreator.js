import dispatcher from 'dispatchers/ApplicationDispatcher'
import * as actionTypes from 'constants/indexActionTypes'
import Bar from 'logic/Bar'

export default class IndexActionCreator {
    constructor() {
        this.bar = new Bar()

        dispatcher.dispatch({
            actionType: actionTypes.INITIALIZE_STATE,
            state: {
                foo: false,
                bar: this.bar.initialState(),
            }
        })
    }

    toggleFoo(currentState){
        dispatcher.dispatch({
            actionType: actionTypes.CLICK_FOO,
            state: {foo: !currentState},
        })
    }

    changeBar(inputValue){
        dispatcher.dispatch({
            actionType: actionTypes.CHANGE_BAR,
            state: {bar: this.bar.check(inputValue)},
        })
    }
}