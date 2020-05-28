import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { App } from "./App"


describe("<App/>", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app.length).toEqual(1);
  });
});