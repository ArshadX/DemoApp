import React from 'react';

import TabBar from './TabBar';
import {shallow} from 'enzyme';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<TabBar label="Tabbar Test" />);
      expect(component).toMatchSnapshot();
    });
  });
});
