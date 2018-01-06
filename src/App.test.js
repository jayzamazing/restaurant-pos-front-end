import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {shallow} from 'enzyme';

describe('Program loads', () => {
  it('renders properly', () => {
    shallow(<App store={store}/>);
  });
});
