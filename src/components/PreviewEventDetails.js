import React from 'react';
import Songs from './Songs';

const PreviewEventDetails = props => {
  const { data, setData, currentlyActive } = props;

  return (
    <div className="preview-event-details">
      <div className="event-description">
        <h3> {currentlyActive.name}</h3>
        <br />
        <h5> Description:</h5>
        <br />
        {currentlyActive.description}
      </div>
      <div className="newest-song-requests">
        <p> Newest Requests</p>
        <Songs />
        <Songs />
        <Songs />
      </div>
      <div className="genre-graph">
        <p> Genre graph goes here</p>
      </div>
    </div>
  );
};

export default PreviewEventDetails;
