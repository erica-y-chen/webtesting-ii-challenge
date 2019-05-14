import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('should display hello word', () => {
    const { getByText } = render(<App />);
    getByText(/hello world!/i);

  })
})
