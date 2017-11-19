import React from 'react';
import { Panel, Tabs, Tab, ListGroup, ListGroupItem, Tooltip, OverlayTrigger } from 'react-bootstrap';

const tooltip = (
  <Tooltip id="tooltip"><strong>Click to view the report!</strong></Tooltip>
);

export default class CommitteePanel extends React.Component {
  render() {
    const mail = this.props.contact.webmail_id &&
      <div><a href="mailto:#" target="_blank" rel="noopener noreferrer" className="fa fa-envelope black-link">
        {`  ${this.props.contact.webmail_id}`}
      </a><br /><br /></div>;
    const fb = this.props.contact.facebook &&
      <div><a href={this.props.contact.facebook} target="_blank" rel="noopener noreferrer" className="fa fa-facebook-square black-link">
        {`  ${this.props.contact.facebook}`}
      </a><br /><br /></div>;
    const insta = this.props.contact.instagram &&
      <div><a href={this.props.contact.instagram} target="_blank" rel="noopener noreferrer" className="fa fa-camera-retro black-link" >
        {`  ${this.props.contact.instagram}`}
      </a><br /><br /></div>;
    const youtube = this.props.contact.youtube && <div><a href={this.props.contact.youtube} target="_blank" rel="noopener noreferrer" className="fa fa-youtube-play black-link">
      {`  ${this.props.contact.youtube}`}
    </a><br /><br /></div>;
    const website = this.props.contact.website && <div><a href={this.props.contact.website} target="_blank" rel="noopener noreferrer" className="fa fa-link black-link">
      {`  ${this.props.contact.website}`}
    </a><br /><br /></div>;
    return (
      <Panel bsStyle={this.props.bsStyle} collapsible header={this.props.header} eventKey={this.props.eventKey}>
        <Tabs id="tabs1" defaultActiveKey={1}>
          <Tab eventKey={1} title="Role">
            <br />
            <p>{this.props.role}</p>
          </Tab>
          <Tab eventKey={2} title="Contact Details">
            <br /><br />
            {mail}
            {website}
            {fb}
            {insta}
            {youtube}
            <p className="fa fa-phone">
              {`  ${this.props.contact.c_num}  (${this.props.contact.c_name}, Convener)`}
            </p><br />
            <p className="fa fa-phone">
              {`  ${this.props.contact.dc_num} (${this.props.contact.dc_name}, Deputy Convener)`}
            </p><br />
          </Tab>
          {this.props.reports && <Tab eventKey={3} title="Activities">
            <br />
            <ListGroup>
              {this.props.reports.map(item => (
                <OverlayTrigger placement="top" overlay={tooltip}>
                  <ListGroupItem header={item.event} href={item.link} target={'_blank'}>
                    <p><br /><i className="fa fa-clock-o grey" />{` ${item.date}`}</p>
                  </ListGroupItem>
                </OverlayTrigger>
              ))}
            </ListGroup>
          </Tab>}
        </Tabs>
      </Panel>
    );
  }
}
