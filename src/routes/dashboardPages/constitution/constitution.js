import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import PDF from 'react-pdf-js';
import ConstitutionPDF from './Constitution.pdf';

const title = 'SBG Constitution';

class Constitution extends React.Component {
  constructor(props, context) {
    super(props);
    context.setTitle(title);
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
    this.state = {
      pages: null,
      page: null,
    };
  }
  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  };
  onPageComplete = (page) => {
    this.setState({ page });
  };
  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  };
  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  };
  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left" /> Previous</a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left" /> Previous</a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right" /></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right" /></a></li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );
  };
  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader><i className="fa fa-book" />&nbsp;&nbsp;SBG Constitution</PageHeader>
          </div>
        </div>
        <br /><br />
        <div>
          {pagination}
          <center>
            <PDF
              file={ConstitutionPDF}
              onDocumentComplete={this.onDocumentComplete}
              onPageComplete={this.onPageComplete}
              page={this.state.page}
            />
          </center>
        </div>
      </div>
    );
  }
}


Constitution.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Constitution;
