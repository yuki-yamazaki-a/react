import React from 'react'

import AreaSearchPanel from './AreaSearchPanel';
import PeopleSearchPanel from './PeopleSearchPanel';

let Store, ActionCreator;

export default class SearchPanels extends React.Component {
  constructor(props) {
    super(props);
    Store = props.Store;
    ActionCreator = props.ActionCreator;
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
        <AreaSearchPanel
          ActionCreator={ActionCreator}
          panelState={this.state.areaSearchPanel} />
        <PeopleSearchPanel
          ActionCreator={ActionCreator}
          panelState={this.state.peopleSearchPanel} />
      </div>
    );
  }
}
