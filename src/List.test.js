import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


describe('<List />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');
        const key = "1";
        const cards = [{one:'one'}, {two:'two'}, {three: 'three'}];

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<List key={key} cards={cards}/>, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const key = "1";
        const cards = [{one:'one'}, {two:'two'}, {three: 'three'}];
        // Render the component, as JSON
        const tree = renderer.create(<List key={key} cards={cards}/>).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/Card.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});