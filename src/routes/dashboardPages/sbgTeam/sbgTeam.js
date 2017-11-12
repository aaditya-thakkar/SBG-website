import React, { PropTypes } from 'react';
import { Carousel, PageHeader } from 'react-bootstrap';

const title = 'SBG Core Team';
const smPp = require('./sm_pp.jpeg');
const jnPp = require('./jn.jpeg');
const nlPp = require('./nl_pp.jpg');
const bmPp = require('./bm_pp.jpg');

class displayBlank extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      index: 0,
      direction: null,
    };
    context.setTitle(title);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedIndex, direction) {
    this.setState({
      index: selectedIndex,
      direction,
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader><i className="fa fa-group" />&nbsp;&nbsp;SBG Core Team</PageHeader>
          </div>
        </div>
        <br /><br />
        <Carousel className="carousel-int" activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
          <Carousel.Item>
            <img width={600} height={200} alt="500x300" src={smPp} />
            <Carousel.Caption>
              <h3>Convener</h3>
              <p>Samarth Parikh, B.Tech 4th year (+91 94281 09090).</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={600} height={200} alt="500x300" src={jnPp} />
            <Carousel.Caption>
              <h3>Deputy Convener</h3>
              <p>Jinesh Shah, B.Tech 4th year (+91 89807 79867).</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={600} height={200} alt="500x300" src={nlPp} />
            <Carousel.Caption>
              <h3>Treasurer</h3>
              <p>Nilay Shrimali, B.Tech 4th year (+91 70462 95423).</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={600} height={200} alt="500x300" src={bmPp} />
            <Carousel.Caption>
              <h3>Secretary</h3>
              <p>Bhargav Makwana, B.Tech 3rd year (+91 91737 70828).</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br /><br />
        <center><p>We are open to feedback and suggestions. Just drop us an email at <a href="mailto:#">sbg@daiict.ac.in</a>.</p></center>
        <br /><br /><br />
      </div>
    );
  }
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
