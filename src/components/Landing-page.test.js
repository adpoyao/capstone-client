import React from 'react';
import { shallow } from 'enzyme';

import {Provider} from 'react-redux';
import store from '../store.js';
import adapter from '../setupTests';

import { LandingPage } from './Landing-page';


describe('<LandingPage />', () => {

  it('should render without fail', () => {
    const wrapper = shallow(<LandingPage />)
  })
});