import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr} from '../../Utils/index';
import Header from './index';

const setUp = (props={}) => {
  const component = shallow(<Header {...props}/>);
  return component;
}

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  test("Should render without errors", () => {
    const wrapper = findByTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1);
  });
});
