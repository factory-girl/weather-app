import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from './App';
import Heading from './components/Heading';
import Inputs from './components/Inputs'
import Weather from './components/Weather';

describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders <App /> component containing a Heading, Inputs and Weather component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Heading).length).toBe(1);
        expect(wrapper.find(Inputs).length).toBe(1);
        expect(wrapper.find(Weather).length).toBe(1);

    });

    it('calls getWeather when button is clicked', () => {
        const getWeather = sinon.spy();
        const wrapper = shallow(<Inputs getWeather={getWeather} />);
        wrapper.find('form').simulate('submit');
        expect(getWeather).toHaveProperty('callCount', 1);
    })
});
