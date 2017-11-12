import React, { Component } from 'react';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-home fa-fw" /> &nbsp;Home
              </a>
            </li>

            {/*<li>*/}
              {/*<a href="" onClick={(e) => { e.preventDefault(); history.push('/icons'); }} >*/}
                {/*Icons*/}
              {/*</a>*/}
            {/*</li>*/}

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/sbgTeam'); }} >
                <i className="fa fa-group fa-fw" /> &nbsp;SBG Core Team
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/constitution'); }} >
                <i className="fa fa-book fa-fw" /> &nbsp;SBG Constitution
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/committees'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Committees
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/clubs'); }} >
                <i className="fa fa-gears fa-fw" /> &nbsp;Clubs
              </a>
            </li>
            {/*<li>*/}
              {/*<a href="" onClick={(e) => { e.preventDefault(); history.push('/annualfests'); }} >*/}
                {/*<i className="fa fa-heart fa-fw" /> &nbsp;Annual Fests*/}
              {/*</a>*/}
            {/*</li>*/}
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/minutes'); }} >
                <i className="fa fa-clock-o fa-fw" /> &nbsp;Minutes of Meetings
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/events'); }} >
                <i className="fa fa-calendar fa-fw" /> &nbsp;Events Calender
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/achievements'); }} >
                <i className="fa fa-trophy fa-fw" /> &nbsp;Achievements
              </a>
            </li>
            <li>
            <a href="" onClick={(e) => { e.preventDefault(); history.push('/gallery'); }} >
              <i className="fa fa-camera-retro fa-fw" /> &nbsp;DA-Gallery
            </a>
          </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
