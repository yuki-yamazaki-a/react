import React from 'react'
import ReactDom from 'react-dom'

// store
import TopStore from 'store/Top/Store'
import TopActionCreator from 'store/Top/ActionCreator'

import SearchBoxStore from 'store/SearchBox/Store'
import SearchBoxActionCreator from 'store/SearchBox/ActionCreator'

// components
import Summary from 'pc/components/Top/Summary'
import Inputs from 'pc/components/Top/Inputs'
import AnotherSummary from 'pc/components/Top/AnotherSummary'

import HeaderSearchBox from 'pc/components/SearchBox/HeaderSearchBox'
import SearchBox from 'pc/components/SearchBox/SearchBox'
import SearchPanels from 'pc/components/SearchBox/SearchPanels'

window.onload = () => {
  const topStore = new TopStore
  const topActionCreator = new TopActionCreator

  const searchBoxStore = new SearchBoxStore
  const searchBoxActionCreator = new SearchBoxActionCreator

  ReactDom.render(
    <HeaderSearchBox
      Store={searchBoxStore}
      ActionCreator={searchBoxActionCreator}
    />,
    document.getElementById('jsd-header-search-box')
  )

  ReactDom.render(
    <Summary
      Store={topStore}
    />,
    document.getElementById('jsd-summary')
  )

  ReactDom.render(
    <Inputs
      Store={topStore}
      ActionCreator={topActionCreator}
    />,
    document.getElementById('jsd-inputs')
  )

  ReactDom.render(
    <AnotherSummary
      Store={topStore}
    />,
    document.getElementById('jsd-another-summary')
  )

  ReactDom.render(
    <SearchBox
      Store={searchBoxStore}
      ActionCreator={searchBoxActionCreator}
    />,
    document.getElementById('jsd-search-box')
  )

  ReactDom.render(
    <SearchPanels
      Store={searchBoxStore}
      ActionCreator={searchBoxActionCreator}
    />,
    document.getElementById('jsd-search-panels')
  )
}
