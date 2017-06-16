import React from 'react'

let ActionCreator;

export default class AreaSearchPanel extends React.Component {
  constructor(props) {
    super(props);
    ActionCreator = props.ActionCreator;
    this.panelState = props.panelState;
  }
  closeAreaSearchPanel(e) {
    e.preventDefault();
    ActionCreator.closeAreaSearchPanel();
  }
  render() {
    const panelDisplay = this.panelState.isDisplay ? ' search-panel--open' : '';
    return (
      <div className={"search-panel"+panelDisplay}>
        <span onClick={(e)=>this.closeAreaSearchPanel(e)}>close</span><br/>
        AreaSearchPanel
      </div>
    );
  }
}
