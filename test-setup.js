/**
 * Defines the React 16 Adapter for Enzyme
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// make enzyme functions available in all test files
global.shallow = shallow;
global.mount = mount;
global.render = render;
