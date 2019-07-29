import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Panel, PageHeader, Tabs, Tab, Modal, Button, ListGroupItem, ListGroup,
} from 'react-bootstrap';
import _ from 'lodash';
import Graph from 'react-graph-vis';
import YouTube from 'react-youtube';

import history from '../../core/history';

import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';
import LabeledPie from '../../components/LabeledPie';
import recentUpdates from './recentUpdates';
import sbgLogo from '../../public/tile.png';

const title = 'SBG | DA-IICT';

const donutUGData = [
  { name: 'Academic Committee', value: 8 },
  { name: 'Cultural Committee', value: 11 },
  { name: 'Annual Festival Committee', value: 14 },
  { name: 'Student Placement Cell', value: 20 },
  { name: 'Cafeteia Management Committee', value: 4 },
  { name: 'ICT Committee', value: 6 },
  { name: 'Sports Committee', value: 8 },
  { name: 'Hostel Management Committee', value: 29 },
];

const donutPGData = [
  { name: 'Academic Committee', value: 2 },
  { name: 'Cultural Committee', value: 2 },
  { name: 'Annual Festival Committee', value: 1 },
  { name: 'Student Placement Cell', value: 11 },
  { name: 'Cafeteia Management Committee', value: 2 },
  { name: 'ICT Committee', value: 2 },
  { name: 'Sports Committee', value: 2 },
  { name: 'Hostel Management Committee', value: 1 },
];

const culturalEvents = [
  {
    name: 'Cultural Events every year',
    value: 27,
  },
];

const weeklySession = [
  {
    name: 'Weekly Club Activities and Sessions',
    value: 10,
  },
];

const AnnualFests = [
  {
    name: 'One of the India\'s biggest Annual Festivals',
    value: 3,
  },
];

const sbgBudget = [
  {
    name: 'SBG Budget provided by DA-IICT for yearly planned activities',
    value: 1085000,
  },
];

const graph = {
  nodes: [
    { id: 1, label: 'Student Body', color: '#7be041', shape: 'box', shadow: true, size: 50, heightConstraint: { minimum: 30 }, widthConstraint: { minimum: 150 } },
    { id: 2, label: 'SBG Members', color: '#e09c41', shape: 'box', shadow: true, size: 50, heightConstraint: { minimum: 30 }, widthConstraint: { minimum: 150 } },
    { id: 3, label: 'SBG Core', color: '#41e0c9', shape: 'box', shadow: true, size: 50, heightConstraint: { minimum: 30 }, widthConstraint: { minimum: 150 } },
  ],
  edges: [
    { from: 1, to: 2, label: 'Elections', length: 200, shadow: true },
    { from: 2, to: 3, label: 'Elections', length: 200, shadow: true },
  ],
};

const opts = {
  height: '200',
  width: '420',
  playerVars: {
    autoplay: 0,
  },
};

const options = {
  layout: {
    randomSeed: 29,
    hierarchical: {
      enabled: false,
      direction: 'DU',
    },
  },
  edges: {
    color: '#000000',
  },
  width: '400px',
  height: '450px',
};

const events = {
  select(event) {
    const { nodes, edges } = event;
  },
};

const otherBodies = {
  AR: {
    header: 'Anti-Ragging Committee',
    body: <div><ul>
      <li>Ragging is strictly forbidden at DA-IICT</li>
      <li>Strict measures are taken to ensure ragging-free campus</li>
      <li>ZERO TOLERANCE policy for ragging at DA-IICT</li>
      <li>We assign an Anti-Ragging committee member from senior year on each floor of every wing in HoR to take care of juniors and take appropriate steps if some unwanted activity is going on.</li>
      <li>There are a total of 10 wings and 30 floors in the HoR, hence there are <strong>17 Anti-Ragging Members assigned by the SBG Core.</strong></li>
    </ul>
      <br />
      <center><Button href={'https://docs.google.com/spreadsheets/d/1ts3rF0QMKr1ro8Z7VJOuJz7ebeuATQoxFPzqCTlgFds/edit?usp=sharing'} target={'_blank'}><b>Anti-Ragging Committee 2019-20</b></Button></center>
    </div>,
  },
  SM: {
    header: 'Student Mentorship Programme',
    body: <div>
      <h4>Student Body</h4>
      <ul>
      <li>It is essential that we as seniors take up the responsibility of helping
        out our juniors in whatever way possible and be role models to whom they can look up to.This is the main aim of the Student Mentorship Program at DA-IICT.  </li>
      <li>The program has been aimed at making the
      freshers feel comfortable and at the same time motivated to take part in various extracurricular activities going
        on in the campus.</li>
      <li>It is necessary that we make them understand the importance of overall development.
      Under the program, mentors are being assigned for a set of freshers.
        There is a mentor assigned to each floor in each wing.</li>
      <li>There are a total of 10 wings and 30 floors in the HoR, hence there are <strong>30 Student Mentors assigned by the SBG Core.</strong></li>
    </ul>
      <br />
      <h4>Student Counsellors</h4>
      <ol>
        <li>
          <p><b>Dr. Nandini Banerjee</b></p>
          <p>Office: Room No. 2108 (Ground Floor, Faculty Block – 2)</p>
          <p>Phone: 079-30510620 (Off.) & 9327010243 (M)</p>
          <p>Available at DA-IICT on two days in a week (on Tuesday and Thursday)</p>
        </li>
        <li>
          <p><b>Dr. Nitu Singh</b></p>
          <p>Organizes regular student activities and ice-breaking sessions for freshers batch</p>
          <p>Phone: 9723611689 (M)</p>
        </li>
      </ol>
    </div>,
  },
  DAC: {
    header: 'Disciplinary Action Committee',
    body: <div>
      <h4>DAC Committee</h4>
      <ul>
        <li>DAC (Disciplinary Action Committee) takes strict action (expulsion
          of the student(s) from the Hostel or from the Institute) for any
          undisciplined activity.</li>
        <li><b>Dean (students)</b> is the <b>Ex Officio Convener</b> of the DAC.</li>
        <li>Both Wardens, Dy. Registrar, Student Counsellor and <b>2 students
          (nominated)</b> are the Members of the DAC</li>
      </ul>
      <br />
      <h4>DAC Warnings</h4>
      <ul>
        <li>Consumption of alcoholic drinks, smoking, usages of any form of
          intoxicating materials and all forms of gambling are strictly
          prohibited in the campus
        </li>
        <li>In any case, prohibition is enforced in the state of Gujarat.
          Any student found guilty of the same, would face strict disciplinary
          action (expulsion from the HoR / Institute). </li>
        <li>No four-wheelers are allowed in the campus.</li>
        <li>if any student would
          like to have a two-wheeler, he/she need to get it registered with the
          Hostel supervisor; he/she is also expected to park it in designated
          area(s) only and follow traffic rules.
        </li>
        <li>Violation of HoR rules is never tolerated.</li>
      </ul>
    </div>,
  },
  GC: {
    header: 'Gender Cell',
    body: <div>
      <h4>Gender Cell Student Representatives</h4>
      <ol>
        <li>
          <p><b>Jhanvi Chauhan</b></p>
          <p>Contact: +91 81603 81186</p>
        </li>
        <li>
          <p><b>Arnab Gupta</b></p>
          <p>Contact: +91 83693 75096</p>
        </li>
      </ol>
      <br />
      <h4>Gender Studies Group</h4>
      <ul>
        <li>The Gender Studies group in DA-IICT has been active since 2015. The group meets regularly for literary discussions and conducts gender sensitization sessions for newly admitted students since then. It now consists of committed volunteers interested in social change.</li>
        <li>The Gender Studies is a space for DA-IICT community to understand gender as it is practised in the society today .The intention of the group is to forward sensitization in the community and to engage in discussions on the aspects of gender in art, literature, media, science and technology.</li>
        <li>The group strives for inclusivity within the campus and the outside world. Apart from conducting sessions for the new batch, we conduct various activities throughout the year to discuss about the changes in the society and DA-IICT's culture in itself. </li>
        <li>The group also spread awareness by performing a play that raises some questions on the sensitive issues mentioned above. The script has been written by <b>Prof Shweta Garg</b> and enacted by <b>members of DA-IICT Theatre Group</b>.</li>
      </ul>
    </div>,
  },
};

const MySmallModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{this.props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.body}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  },
});


class Home extends React.Component {
  constructor(props, context) {
    super(props);
    context.setTitle(title);
    this.state = {
      modalShow: false,
      header: '',
      body: '',
    };
    this.modalClose = this.modalClose.bind(this);
    this.onClickAR = this.onClickAR.bind(this);
    this.onClickSM = this.onClickSM.bind(this);
    this.onClickDAC = this.onClickDAC.bind(this);
    this.onClickGC = this.onClickGC.bind(this);
    this.onReady = this.onReady.bind(this);
  }
  onClickAR() {
    this.setState({
      modalShow: true,
      header: otherBodies.AR.header,
      body: otherBodies.AR.body,
    });
  }
  onClickSM() {
    this.setState({
      modalShow: true,
      header: otherBodies.SM.header,
      body: otherBodies.SM.body,
    });
  }
  onClickDAC() {
    this.setState({
      modalShow: true,
      header: otherBodies.DAC.header,
      body: otherBodies.DAC.body,
    });
  }
  onClickGC() {
    this.setState({
      modalShow: true,
      header: otherBodies.GC.header,
      body: otherBodies.GC.body,
    });
  }
  modalClose() {
    this.setState({
      modalShow: false,
    });
  }
  onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader><i className="fa fa-home" />&nbsp;&nbsp;Home - SBG, DA-IICT</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <StatWidget
              style="panel-primary"
              icon="fa fa-user fa-4x"
              count="4"
              headerText="SBG Core Members"
              footerText="View Details"
              linkTo="/sbgTeam"
            />
          </div>
          <div className="col-lg-3 col-md-4">
            <StatWidget
              style="panel-green"
              icon="fa fa-dashboard fa-4x"
              count="8"
              headerText="Committees"
              footerText="View Details"
              linkTo="/committees"
            />
          </div>
          <div className="col-lg-3 col-md-4">
            <StatWidget
              style="panel-red"
              icon="fa fa-gears fa-4x"
              count="22"
              headerText="Hobby Driven Clubs"
              footerText="View Details"
              linkTo="/clubs"
            />
          </div>
          <div className="col-lg-3 col-md-4">
            <StatWidget
              style="panel-yellow"
              icon="fa fa-group fa-4x"
              count="122"
              headerText="Elected Members"
              footerText="View Details"
              href="https://docs.google.com/spreadsheets/d/1pOG6HOdyIJZkVVJIn9Sg_sPScM39fyDPlAVZVxpwFRw/edit?usp=sharing"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <Panel
              header={<span>
                <h4><i className="fa fa-shield fa-fw" />&nbsp;&nbsp;Student Body Government Vision</h4>
              </span>}
            >
              <div className='col-md-3'>
                <img src={sbgLogo} height={130} width={130} />
              </div>
              <div className='col-md-9'>
                <p>We, the students of DA-IICT, resolve to constitute a self governing democratic organization
                  called DA-IICT Student Body Government for the purposes of:</p>
                <ul>
                  <li>Monitoring and regulation of all student activities</li>
                  <li>Ensuring justice and equality in all aspects of student life and</li>
                  <li>Enhancing the overall development of students</li>
                </ul>
                <a style={{ float: 'right' }} href="" onClick={(e) => { e.preventDefault(); history.push('/constitution'); }}>Constitution</a>
              </div>
            </Panel>

            <Panel
              header={<span>
                <h4><i className="fa fa-bar-chart-o fa-fw" /> Activities Statistics</h4>
              </span>}
            >
              <div className="row">
                <div className="col-md-6">
                  <LabeledPie data={AnnualFests} color="#8884d8" innerRadius="50%" outerRadius="90%" />
                  <h5 style={{ color: '#8884d8' }}>
                    <center>{AnnualFests[0].name}</center>
                  </h5>
                </div>
                <div className="col-md-6">
                  <LabeledPie data={culturalEvents} color="#f39c12" outerRadius="90%" innerRadius="50%" />
                  <h5 style={{ color: '#f39c12' }}>
                    <center>{culturalEvents[0].name}</center>
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <LabeledPie moreThan data={weeklySession} color="#008080" innerRadius="50%" outerRadius="90%" />
                  <h5 style={{ color: '#008080' }}>
                    <center>{weeklySession[0].name}</center>
                  </h5>
                </div>
                <div className="col-md-6">
                  <LabeledPie data={sbgBudget} color="#f15854" innerRadius="50%" outerRadius="90%" />
                  <h5 style={{ color: '#f15854' }}>
                    <center>{sbgBudget[0].name}</center>
                  </h5>
                </div>
              </div>
            </Panel>

            <Panel
              header={<span>
                <h4><i className="fa fa-shield fa-fw" /> The Election Commission</h4>
              </span>}
            >
              <p>The Election Commission resolves to</p>
              <ul>
                <li>be an independent and autonomous body, responsible for organising and conducting fair elections.</li>
                <li>ensure that the election management is transparent with no scope of partiality.</li>
                <li>deal with any grievances and issues raised during the process nonetheless.</li>
              </ul>
              <br />
              <h5>Election Commissioners</h5>
              <ol>
                <li>Gaurav Sofat</li>
                <li>Neha Jain</li>
                <li>Rohin Nanavati</li>
              </ol>
              <a style={{ float: 'right' }} target={'_blank'} href="https://docs.google.com/document/d/1sHfnu0Tpv6xn-VXDvZIyjVl1UYrmP_8JGJG-42AKP5E/edit?usp=sharing">Constitution (First Draft)</a>
            </Panel>

            <Panel
              header={<span>
                <h4><i className="fa fa-group fa-fw" /> Other Active Student Bodies</h4>
              </span>}
            >
              <div>
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge"><i className="fa fa-check" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Anti-Ragging Committee</h4>
                      </div>
                      <div className="timeline-body">
                        <a style={{ fontSize: 12 }} onClick={this.onClickAR}>View Details</a>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge success"><i className="fa fa-check" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Student Mentorship Programme</h4>
                      </div>
                      <div className="timeline-body">
                        <a style={{ fontSize: 12 }} onClick={this.onClickSM}>View Details</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge danger"><i className="fa fa-check" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Disciplinary Action Committee</h4>
                      </div>
                      <div className="timeline-body">
                        <a style={{ fontSize: 12 }} onClick={this.onClickDAC}>View Details</a>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge warning"><i className="fa fa-check" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Gender Cell</h4>
                      </div>
                      <div className="timeline-body">
                        <a style={{ fontSize: 12 }} onClick={this.onClickGC}>View Details</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <MySmallModal heading={this.state.header} body={this.state.body} show={this.state.modalShow} onHide={this.modalClose} />
              </div>
            </Panel>

          </div>

          <div className="col-lg-5">
            <Panel
              header={<span>
                <h4><i className="fa fa-sun-o fa-fw" /> A Day in DA-IICT</h4>
              </span>}
            >
              <YouTube
                videoId="XuGtAeEHKwI"
                opts={opts}
                onReady={this.onReady}
              />
            </Panel>
            <Panel
              header={<span>
                <h4><i className="fa fa-pencil-square-o fa-fw" /> Notable Activities</h4>
              </span>}
            >
              <ListGroup>
                {_.filter(recentUpdates, o => o.active).map(o => {
                  let timestamp = 'Today';
                  const today = new Date();
                  const dd = today.getDate() === o.date.getDate();
                  const mm = today.getMonth() === o.date.getMonth();
                  const yyyy = today.getFullYear() === o.date.getFullYear();
                  const diff = Math.floor((today.getTime() - o.date.getTime()) / 86400000);
                  if (!dd || !mm || !yyyy) {
                    if (diff === 1) {
                      timestamp = `${diff} day ago`;
                    } else {
                      timestamp = `${diff} days ago`;
                    }
                  }
                  return (
                    <ListGroupItem href={o.link} target={'_blank'}>
                      <i className="fa  fa-angle-double-right fa-fw" /> {o.title}
                      <span className="pull-right text-muted small"><em>{timestamp}</em></span>
                    </ListGroupItem>
                  );
                }
                )}
              </ListGroup>
            </Panel>

            <Panel
              header={<span>
                <h4><i className="fa fa-signal fa-fw" /> SBG Hierarchy</h4>
              </span>}
            >
              <Graph graph={graph} options={options} events={events} />
            </Panel>

            <Panel
              header={<span>
                <h4><i className="fa fa-info-circle fa-fw" /> Committee wise Members' Count</h4>
              </span>}
            >
              <Tabs id="tabs11" defaultActiveKey={1}>
                <Tab eventKey={1} title="Under Graduate (99)">
                  <div>
                    <Donut data={donutUGData} color="#2c3e50" innerRadius="70%" outerRadius="90%" />
                  </div>
                </Tab>
                <Tab eventKey={2} title="Post Graduate (23)">
                  <Donut data={donutPGData} color="#2c3e50" innerRadius="70%" outerRadius="90%" />
                </Tab>
              </Tabs>

            </Panel>

          </div>

        </div>
      </div>
    );
  }
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
