'use strict';
import React from 'react';
import Input from './input';
import {shallow} from 'enzyme';

describe('checkbox', () => {
  let meta, input, label;
  beforeEach(() => {
    input = {
      name: 'storeId'
    };
    label = 'Choose a store.';
    meta = {touched: false}
  });
  afterEach(() => {
    input = {};
    label = '';
    meta = {};
  });
  it('renders without problems', () => {
    input = {
      name: 'acceptTerms'
    }
    label = 'I accept the Terms of Service';
    meta = {touched: false}
    shallow(<Input meta={meta} input={input} label={label}/>);
  });
});
