import React, { PropTypes } from 'react';
import { Carousel, PageHeader } from 'react-bootstrap';

const title = 'SBG Core Team';
const ysPp = require('./ys_pp.jpg');
const vsPp = require('./vs_pp.jpg');
const akPp = require('./ak_pp.jpg');
const ymPp = require('./ym_pp.jpg');

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
            <img width={600} height={200} alt="500x300" src={ysPp} />
            <Carousel.Caption>
              <h3>Convener</h3>
              <p>Yash Shah, B.Tech 4th year (+91 99250 69749).</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={600} height={200} alt="500x300" src={vsPp} />
            <Carousel.Caption>
              <h3>Deputy Convener</h3>
              <p>Vandan Soni, B.Tech 4th year (+91 74052 72305).</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={600} height={200} alt="500x300" src={akPp} />
            <Carousel.Caption>
              <h3>Treasurer</h3>
              <p>Abhishek Kalavadiya, B.Tech 4th year (+91 87583 08779).</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={600} height={200} alt="500x300" src={ymPp} />
            <Carousel.Caption>
              <h3>Secretary</h3>
              <p>Yash Mehta, B.Tech 4th year (+91 83065 53698).</p>
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
