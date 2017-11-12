import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import eventsSchedule from './eventsSchedule';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
); // or globalizeLocalizer

const title = 'Events Calendar';

class Events extends React.Component {
  constructor(props, context) {
    super(props);
    context.setTitle(title);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader><i className="fa fa-calendar" />&nbsp;&nbsp;Events Calendar</PageHeader>
          </div>
        </div>
        <br /><br />
        <div className="calender-div" {...this.props}>
          <BigCalendar
            selectable
            popup
            events={eventsSchedule}
            defaultDate={new Date()}
            onSelectEvent={event => alert(event.title)}
          />
        </div>
        <br /><br />
      </div>
    );
  }
}

Events.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Events;
