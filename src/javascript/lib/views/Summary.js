import React from 'react'
let Store

export default class Summary extends React.Component {
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
            <dl>
                <dt>Foo is clicked?</dt>
                <dd>{this.state.foo? 'YES' : 'NO'}</dd>
                <dt>Bar is reached to 5?</dt>
                <dd>{this.state.bar? 'YES' : 'NO'}</dd>
            </dl>
        )
    }
}