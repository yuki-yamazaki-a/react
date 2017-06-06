import React from 'react';
import ReactDom from 'react-dom';

import IndexActionCreator from 'actionCreators/IndexActionCreator'
import IndexStore from 'stores/IndexStore'

import Summary from 'views/Summary'
import Inputs from 'views/Inputs'
import AnotherSummary from 'views/AnotherSummary'

window.onload = () => {
    const store = new IndexStore()
    const actionCreator = new IndexActionCreator()

    ReactDom.render(
        <Summary
            Store={store}
        />,
        document.getElementById('summary')
    );

    ReactDom.render(
        <Inputs
            Store={store}
            ActionCreator={actionCreator}
        />,
        document.getElementById('inputs')
    );

    ReactDom.render(
        <AnotherSummary
            Store={store}
        />,
        document.getElementById('another-summary')
    );
}