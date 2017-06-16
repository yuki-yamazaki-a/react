import React from 'react'

let ActionCreator;

export default class PeopleSearchPanel extends React.Component {
  constructor(props) {
    super(props);
    ActionCreator = props.ActionCreator;
    this.panelState = props.panelState;
  }
  closePeopleSearchPanel(e) {
    e.preventDefault();
    ActionCreator.closePeopleSearchPanel();
  }
  render() {
    const panelDisplay = this.panelState.isDisplay ? ' search-panel--open' : '';
    return (
      <div className={"search-panel"+panelDisplay}>
        <span onClick={(e)=>this.closePeopleSearchPanel(e)}>close</span><br/>
        PeopleSearchPanel
      </div>
    );
  }
}
