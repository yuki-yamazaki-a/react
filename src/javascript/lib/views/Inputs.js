import React from 'react'
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
                    <input
                        type='text'
                        placeholder='Bar: Enter something.'
                        onChange={e => this.handleChangeBar(e)}
                    />
                </div>
            </div>
        )
    }
    handleClickFoo(){
        ActionCreator.toggleFoo(this.state.foo)
    }
    handleChangeBar(e){
        ActionCreator.changeBar(e.target.value)
    }
}

