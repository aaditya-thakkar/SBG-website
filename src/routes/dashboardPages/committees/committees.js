import React, { PropTypes } from 'react';
import { PageHeader, PanelGroup } from 'react-bootstrap';
import committeesInfo from './committeesInfo.js';
import CommitteePanel from './CommitteePanel.js';

const title = 'Committees';

class Committees extends React.Component {
  constructor(props, context) {
    super(props);
    context.setTitle(title);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader><i className="fa fa-dashboard" />&nbsp;&nbsp;SBG Committees</PageHeader>
          </div>
        </div>
        <br /><br />
        <PanelGroup>
          {committeesInfo.map(item => {
            return (
              <CommitteePanel
                header={item.header}
                role={item.role}
                contact={item.contact}
                reports={_.get(item, 'reports', null)}
                bsStyle={item.style}
              />
            );
          })}
        </PanelGroup>
        <br /><br />
      </div>
    );
  }
}

Committees.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Committees;
