import React from 'react';

const Event = props => {
    let eventClass;
    if (props.data.active === `event${props.num}`) {
        eventClass = 'selected'
    } else {
        eventClass = ''
    }

        let eventNum = `event${props.num}`;
        let event = props.data[eventNum];
  return (
        <button
          className={`events ${eventClass}`}
          onClick={() =>
            props.setData({ ...props.data, active: `event${props.num}` })
              }
        >
          <h2>{event.name}</h2>
          <p> Date: 05/03/2020</p>
        </button>
  );
};

export default Event;
