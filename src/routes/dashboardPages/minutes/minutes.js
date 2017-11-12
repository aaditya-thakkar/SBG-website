import React, { PropTypes } from 'react';
import { PageHeader, Panel } from 'react-bootstrap';

const title = 'Minutes of Meetings';

class Minutes extends React.Component {
  constructor(props, context) {
    super(props);
    context.setTitle(title);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader><i className="fa fa-clock-o" />&nbsp;&nbsp;Minutes of Meetings</PageHeader>
          </div>
        </div>
        <br /><br />
        <Panel
          header={<span>
            <h4><i className="fa fa-clock-o fa-fw" /> Timeline</h4>
            </span>}
        >
          <div>
            <ul className="timeline">
              <li>
                <div className="timeline-badge success"><i className="fa fa-check" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">SBG General Meet 1 (2017-18)</h4>
                    <p>
                      <small className="text-muted">
                        <i className="fa fa-clock-o" /> 19th September, 2017
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <a target={'_blank'} rel={'noopener norefferer'} href={'https://docs.google.com/document/d/1dnZZpukHTwIMxsyYRd04_HJPysc72d1Zpk-EBKemwVw/edit?usp=sharing'}>Click to view the minutes</a>
                  </div>
                </div>
              </li>
              <li  className="timeline-inverted">
                <div className="timeline-badge danger"><i className="fa fa-check" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">SBG General Meet 3 (2016-17)</h4>
                    <p>
                      <small className="text-muted">
                        <i className="fa fa-clock-o" /> 31st January, 2017
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <a target={'_blank'} rel={'noopener norefferer'} href={'https://drive.google.com/open?id=1mmSIBA_-tXB4cucQwvh9JBab_nmOh4ExR_vPXMTTte8'}>Click to view the minutes</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge warning"><i className="fa fa-check" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">SBG General Meet 1 (2016-17)</h4>
                    <p>
                      <small className="text-muted">
                        <i className="fa fa-clock-o" /> 26th August, 2016
                      </small>
                    </p>
                  </div>
                  <div className="timeline-body">
                    <a target={'_blank'} rel={'noopener norefferer'} href={'https://docs.google.com/document/d/1dyjhdQIXdi9QVgYq5oHUf4PAxaDkx5gtM1vRWWvbvmE'}>Click to view the minutes</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Panel>
        <br /><br />
      </div>
    );
  }
}

Minutes.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Minutes;
