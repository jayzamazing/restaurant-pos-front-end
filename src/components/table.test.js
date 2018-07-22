'use strict'
import React from 'react';
import Table from './table.js';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';

describe('table', () => {
  it('should render', () => {
    shallow(<Table src="../img/brown4persontable.png" alt="round table pic"
            figClass="one-digit" figNumber="1"/>);
  });
  it('snapshot', () => {
    const wrapper = shallow(<Table src="../img/brown4persontable.png" alt="round table pic"
                            figClass="one-digit" figNumber="1"/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
