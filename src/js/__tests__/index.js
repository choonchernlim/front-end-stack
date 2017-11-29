// @flow
/**
 * Global setup before running any specs.
 *
 * IMPORTANT: Don't pollute `global.*` to prevent any side effects when running tests!
 */
import 'babel-polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// To prevent the following error when using Enzyme:-
//
// Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none. To
// configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
// before using any of Enzyme's top level APIs, where `Adapter` is the adapter
// corresponding to the library currently being tested. For example:
configure({ adapter: new Adapter() });
