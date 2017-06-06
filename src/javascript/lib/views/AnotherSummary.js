import React from 'react'
let Store

export default class AnotherSummary extends React.Component {
    constructor(props) {
        super(props)
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
            <ul>
                <li>Foo is {this.state.foo? 'clicked' : 'not clicked'}.</li>
                <li>Bar is {this.state.bar? 'reached' : 'not reached'} to 5.</li>
            </ul>
        )
    }
}