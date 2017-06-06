import {EventEmitter} from 'events'
import dispatcher from 'dispatchers/ApplicationDispatcher'
import * as actionTypes from 'constants/indexActionTypes'

const _state = {};
export default class IndexStore extends EventEmitter{
    constructor() {
        super();
        dispatcher.register(payload => {
            switch(payload.actionType){
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
    addChangeListener(callback) {
        return this.on('change', callback)
    }
    getAll() {
        return _state;
    }
    initializeState(defaultState){
        Object.assign(_state, defaultState)
        this.emit('change')
    }
    updateBar(newState){
        Object.assign(_state, newState)
        this.emit('change')
    }
    updateFoo(newState){
        Object.assign(_state, newState)
        this.emit('change')
    }
}