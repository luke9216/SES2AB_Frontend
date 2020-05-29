
import React from 'react';
import { shallow } from 'enzyme';
import HomePage from "./HomePage";

// configure({ adapter: new Adapter() });

describe("<HomePage/>", () => {
    const app = shallow(<HomePage />);

    it("Renders without crashing", () => {
        expect(app.length).toEqual(1);
    });

    // it("Has an menu navigation button", () => {
    //     expect(app.find("logo").length).toEqual(1);
    // });
});