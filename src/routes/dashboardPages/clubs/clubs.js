import React, { PropTypes } from 'react';
import { PageHeader, PanelGroup } from 'react-bootstrap';
import _ from 'lodash';
import clubsInfo from './clubsInfo.js';
import ClubsPanel from './ClubsPanel.js';

const title = 'Clubs';

class Clubs extends React.Component {
  constructor(props, context) {
    super(props);
    context.setTitle(title);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader><i className="fa fa-gears" />&nbsp;&nbsp;SBG Clubs</PageHeader>
          </div>
        </div>
        <br /><br />
        <PanelGroup>
          {clubsInfo.map((item, i) => (
            <ClubsPanel
              header={item.header}
              role={item.role}
              contact={item.contact}
              reports={_.get(item, 'reports', null)}
              bsStyle={item.style}
              eventKey={i}
            />
            ))}
        </PanelGroup>
        <br /><br />
      </div>
    );
  }
  handleClick() {

  }
}

Clubs.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Clubs;
