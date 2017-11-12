import React, { PropTypes } from 'react';
import { Carousel, PageHeader, Button } from 'react-bootstrap';

const title = 'Annual Fests';
const synapse = require('./synapse.jpg');
const concours = require('./concours.jpg');
const ifest = require('./ifest.jpg');

class displayBlank extends React.Component {
  constructor(props, context) {
    super(props);
    context.setTitle(title);
    this.handleClickConcours = this.handleClickConcours.bind(this);
    this.handleClickIfest = this.handleClickIfest.bind(this);
    this.handleClickSynapse = this.handleClickSynapse.bind(this);
  }
  handleClickIfest() {
    window.open('http://http://ieee.daiict.ac.in/ifest17', '_blank');
  }
  handleClickConcours() {
    window.open('http://concours.daiict.ac.in', '_blank');
  }
  handleClickSynapse() {
    window.open('http://synapse.daiict.ac.in', '_blank');
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader><i className="fa fa-heart" />&nbsp;&nbsp;Annual Fests</PageHeader>
          </div>
        </div>
        <br />
        <Carousel className="carousel-ext">
          <Carousel.Item>
            <Carousel.Caption>
              <h2>Synapse</h2>
              <h3>Annual Cultural Fest</h3>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <Button onClick={this.handleClickSynapse}>Explore More</Button>
              <br /><br /><br />
            </Carousel.Caption>
            <img width={1120} height={500} alt="1120x500" src={synapse} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h2>Concours</h2>
              <h3>Annual Sports Fest</h3>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <Button onClick={this.handleClickConcours}>Explore More</Button>
              <br /><br /><br />
            </Carousel.Caption>
            <img width={1120} height={500} alt="1120x500" src={concours} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h2>I.Fest</h2>
              <h3>Annual Technical Fest</h3>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <Button onClick={this.handleClickIfest}>Explore More</Button>
              <br /><br />
            </Carousel.Caption>
            <img width={1120} height={500} alt="1120x500" src={ifest} />
          </Carousel.Item>
        </Carousel>
        <br />
      </div>
    );
  }
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
