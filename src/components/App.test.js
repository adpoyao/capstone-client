import React from 'react';
import { shallow } from 'enzyme';

import store from '../store.js';
import adapter from '../setupTests';
import localStorage from '../mock-localstorage';

import { App } from './App';

describe('<App />', () => {

  it('should render without fail', () => {
    shallow(<App />)
  })
});