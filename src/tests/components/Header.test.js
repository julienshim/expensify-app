import React from 'react';
import { shallow } from 'enzyme';
// import toJson from "enzyme-to-json";
// import ShallowRenderer from "react-test-renderer/shallow";
import Header from '../../components/Header';
// react-test-renderer

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // expect(wrapper.find("h1").text()).toBe("Expensify");
  // const renderer = new ShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
