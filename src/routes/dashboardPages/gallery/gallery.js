import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import img1 from '../../../public/gallary/1.jpg';
import img2 from '../../../public/gallary/2.jpg';
import img3 from '../../../public/gallary/3.jpg';
import img4 from '../../../public/gallary/4.jpg';
import img5 from '../../../public/gallary/5.jpg';
import img6 from '../../../public/gallary/6.jpg';
import img7 from '../../../public/gallary/7.jpg';
import img8 from '../../../public/gallary/8.jpg';
import img9 from '../../../public/gallary/9.jpg';
import img10 from '../../../public/gallary/10.jpg';
import img11 from '../../../public/gallary/11.jpg';
import img12 from '../../../public/gallary/12.jpg';
import img13 from '../../../public/gallary/13.jpg';
import img14 from '../../../public/gallary/14.jpg';
import img15 from '../../../public/gallary/15.jpg';
import img16 from '../../../public/gallary/16.jpg';
import img17 from '../../../public/gallary/17.png';
import img18 from '../../../public/gallary/18.jpg';
import img19 from '../../../public/gallary/19.jpg';
import img20 from '../../../public/gallary/20.jpg';
import img21 from '../../../public/gallary/21.jpg';
import img22 from '../../../public/gallary/22.jpg';
import img23 from '../../../public/gallary/23.jpg';
import img24 from '../../../public/gallary/24.jpg';
import img25 from '../../../public/gallary/25.jpg';
import img26 from '../../../public/gallary/26.jpg';
import img27 from '../../../public/gallary/27.jpg';
import img28 from '../../../public/gallary/28.jpg';
import img29 from '../../../public/gallary/29.jpg';
import img30 from '../../../public/gallary/30.jpg';
import img31 from '../../../public/gallary/31.jpg';
import img32 from '../../../public/gallary/32.jpg';
import img33 from '../../../public/gallary/33.jpg';
import img34 from '../../../public/gallary/34.jpg';
import img35 from '../../../public/gallary/35.jpg';
import img36 from '../../../public/gallary/36.jpg';
import img37 from '../../../public/gallary/37.jpg';
import img38 from '../../../public/gallary/38.jpg';
import img39 from '../../../public/gallary/39.jpg';
import img40 from '../../../public/gallary/40.jpg';

const title = 'DA-IICT Gallery';

const images = [
  { src: img1, width: 4, height: 3 },
  { src: img2, width: 4, height: 3 },
  { src: img3, width: 4, height: 3 },
  { src: img4, width: 4, height: 3 },
  { src: img5, width: 4, height: 3 },
  { src: img6, width: 4, height: 3 },
  { src: img7, width: 4, height: 3 },
  { src: img8, width: 4, height: 3 },
  { src: img9, width: 4, height: 3 },
  { src: img10, width: 4, height: 3 },
  { src: img11, width: 4, height: 3 },
  { src: img12, width: 4, height: 3 },
  { src: img13, width: 4, height: 3 },
  { src: img14, width: 4, height: 3 },
  { src: img15, width: 4, height: 3 },
  { src: img16, width: 4, height: 3 },
  { src: img17, width: 4, height: 3 },
  { src: img18, width: 4, height: 3 },
  { src: img19, width: 4, height: 3 },
  { src: img20, width: 4, height: 3 },
  { src: img21, width: 4, height: 3 },
  { src: img22, width: 4, height: 3 },
  { src: img23, width: 4, height: 3 },
  { src: img24, width: 4, height: 3 },
  { src: img25, width: 4, height: 3 },
  { src: img26, width: 4, height: 3 },
  { src: img27, width: 4, height: 3 },
  { src: img28, width: 4, height: 3 },
  { src: img29, width: 4, height: 3 },
  { src: img30, width: 4, height: 3 },
  { src: img31, width: 4, height: 3 },
  { src: img32, width: 4, height: 3 },
  { src: img33, width: 4, height: 3 },
  { src: img34, width: 4, height: 3 },
  { src: img35, width: 4, height: 3 },
  { src: img36, width: 4, height: 3 },
  { src: img37, width: 4, height: 3 },
  { src: img38, width: 4, height: 3 },
  { src: img39, width: 4, height: 3 },
  { src: img40, width: 4, height: 3 },
];

class DAGallery extends React.Component {
  constructor(props, context) {
    super(props);
    context.setTitle(title);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader><i className="fa fa-camera-retro" />&nbsp;&nbsp;DA-IICT Gallery</PageHeader>
          </div>
        </div>
        <div>
          <Gallery photos={images} onClick={this.openLightbox} />
          <Lightbox
            images={images}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
        <br /><br />

      </div>
    );
  }
}

DAGallery.contextTypes = { setTitle: PropTypes.func.isRequired };
export default DAGallery;
