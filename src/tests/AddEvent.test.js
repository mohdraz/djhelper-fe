import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AddEvent from '../components/AddEvent';
import { store } from './store';

test('Add Event page renders inputs for event data', async () => {
  const history = createMemoryHistory();
  const simulatedDom = render(
    <Router history={history}>
      <Provider store={store}>
        <AddEvent />
      </Provider>
    </Router>
  );

  const mainHeading = simulatedDom.queryByText(/Add an Event/i);
  const descriptionLabel = simulatedDom.queryByText(/description/i);
  const eventNameLabel = simulatedDom.queryByText(/event name/i);
  const eventTypeLabel = simulatedDom.queryByText(/type of event/i);
  const eventImgContainer = simulatedDom.getByTestId('event-img-container');

  const addressLine1Label = simulatedDom.queryByText(/Address Line 1/i);
  const addressLine2Label = simulatedDom.queryByText(/Address Line 2/i);
  const cityLabel = simulatedDom.queryByText(/city/i);
  const stateLabel = simulatedDom.queryByText(/state/i);
  const zipLabel = simulatedDom.queryByText(/zip/i);

  const dateLabel = simulatedDom.queryByText(/date/i);
  const startTimeLabel = simulatedDom.queryByText(/start time/i);
  const endTimeLabel = simulatedDom.queryByText(/end time/i);

  const showMoreButton = simulatedDom.getByTestId('showMoreLocationData');
  const venueNameLabel = simulatedDom.queryByText(/Venue Name/i);
  const venueWebsiteLabel = simulatedDom.queryByText(/Venue Website/i);
  const venueEmailLabel = simulatedDom.queryByText(/Venue Email/i);

  const submitButton = simulatedDom.getByTestId('submit-button');

  expect(mainHeading).toBeInTheDocument();
  expect(eventNameLabel).toBeInTheDocument();
  expect(eventTypeLabel).toBeInTheDocument();
  expect(descriptionLabel).toBeInTheDocument();
  expect(eventImgContainer).toBeInTheDocument();

  expect(addressLine1Label).toBeInTheDocument();
  expect(addressLine2Label).toBeInTheDocument();
  expect(cityLabel).toBeInTheDocument();
  expect(stateLabel).toBeInTheDocument();
  expect(zipLabel).toBeInTheDocument();

  expect(dateLabel).toBeInTheDocument();
  expect(startTimeLabel).toBeInTheDocument();
  expect(endTimeLabel).toBeInTheDocument();

  expect(venueNameLabel).not.toBeInTheDocument();
  expect(venueWebsiteLabel).not.toBeInTheDocument();
  expect(venueEmailLabel).not.toBeInTheDocument();
  expect(showMoreButton).toBeInTheDocument();

  expect(submitButton).toBeInTheDocument();
});

test('Clicking on show more button on AddEvent page displays additional fields', () => {
  const history = createMemoryHistory();
  const { queryByText, getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <AddEvent />
      </Router>
    </Provider>
  );

  const showMoreButton = getByTestId('showMoreLocationData');
  fireEvent.click(showMoreButton);

  const venueNameLabel = queryByText(/Venue Name/i);
  const venueWebsiteLabel = queryByText(/Venue Website/i);
  const venueEmailLabel = queryByText(/Venue Email/i);
  const locationImgContainer = getByTestId('location-img-container');

  expect(venueNameLabel).toBeInTheDocument();
  expect(venueWebsiteLabel).toBeInTheDocument();
  expect(venueEmailLabel).toBeInTheDocument();
  expect(locationImgContainer).toBeInTheDocument();
});
