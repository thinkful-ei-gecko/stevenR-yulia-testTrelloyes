import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';


describe('<Card />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Card />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/Card.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});
