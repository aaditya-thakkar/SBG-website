/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navbar, { Brand } from 'react-bootstrap/lib/Navbar';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import Sidebar from '../Sidebar';
import history from '../../core/history.js';

const logo = require('./logo.png');

function Header() {
  return (
    <div id="wrapper" className="content">
      <Navbar fluid style={{ margin: 0 }}>
        <ButtonToolbar className="dropdown-home" style={{ marginTop: 10 }}>
          <DropdownButton bsStyle="default" noCaret title={<span><i className="fa fa-th-list" /></span>} id="dropdown-size-large">
            <MenuItem href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} eventKey="1">Home</MenuItem>
            <MenuItem divider />
            <MenuItem href="" onClick={(e) => { e.preventDefault(); history.push('/sbgTeam'); }} eventKey="2">Core Team</MenuItem>
            <MenuItem divider />
            <MenuItem href="" onClick={(e) => { e.preventDefault(); history.push('/constitution'); }} eventKey="3">Constitution</MenuItem>
            <MenuItem divider />
            <MenuItem href="" onClick={(e) => { e.preventDefault(); history.push('/committees'); }} eventKey="4">Committees</MenuItem>
            <MenuItem divider />
            <MenuItem href="" onClick={(e) => { e.preventDefault(); history.push('/clubs'); }} eventKey="5">Clubs</MenuItem>
            <MenuItem divider />
            {/*<MenuItem href={'/annualFests'} eventKey="6">Annual Fests</MenuItem>*/}
            {/*<MenuItem divider />*/}
            <MenuItem href="" onClick={(e) => { e.preventDefault(); history.push('/minutes'); }} eventKey="7">Minutes</MenuItem>
            <MenuItem divider />
            <MenuItem href="" onClick={(e) => { e.preventDefault(); history.push('/events'); }} eventKey="8">Events</MenuItem>
            <MenuItem divider />
            <MenuItem href="" onClick={(e) => { e.preventDefault(); history.push('/achievements'); }} eventKey="9">Achievements</MenuItem>
            <MenuItem divider />
            <MenuItem href="" onClick={(e) => { e.preventDefault(); history.push('/gallery'); }} eventKey="10">DA-Gallery</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
        <Brand>
          <span>
            <img src={logo} alt="Student Body Government" title="Student Body Government" />
            <span>&nbsp;Student Body Government, DA-IICT</span>
          </span>
        </Brand>
        <Sidebar />
        <p style={{ float: 'right', top: 0, right: 0, fontSize: 8 }}>Created and Maintained by Aaditya Thakkar</p>
      </Navbar>
    </div>
  );
}

export default Header;
