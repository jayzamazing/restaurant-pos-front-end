'use strict';
import React from 'react';
import DropDown from './dropDown';
import {shallow} from 'enzyme';

describe('checkbox', () => {
  let meta, input, label, stores;
  beforeEach(() => {
    input = {
      name: 'storeId'
    };
    stores = [100, 101, 102, 103];
    label = 'Choose a store.';
    meta = {touched: false}
  });
  afterEach(() => {
    input = {};
    stores = [];
    label = '';
    meta = {};
  });
  it('renders without problems', () => {
    shallow(<DropDown meta={meta} input={input} label={label}
      stores={stores}/>);
  });
});
