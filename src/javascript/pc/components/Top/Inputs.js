import React from 'react'
import BarInput from '../partial/BarInput'

let Store, ActionCreator

export default class Inputs extends React.Component {
    constructor(props) {
        super(props)
        ActionCreator = props.ActionCreator
        Store = props.Store

        this.state = Store.getAll();
    }

    componentDidMount() {
        Store.addChangeListener(() => {
            this.setState(Store.getAll());
        });
    }

    render() {
        return (
            <div>
                <div>
                    <button
                        type='button'
                        onClick={() => this.handleClickFoo()}
                    >Foo: click me.</button>
                </div>
                <div>
                    <BarInput
                        placeholder={'Bar: Enter something.'}
                        handleChangeBar={ActionCreator.changeBar}
                    />
                </div>
            </div>
        )
    }
    handleClickFoo(){
        ActionCreator.toggleFoo(this.state.foo)
    }
}

