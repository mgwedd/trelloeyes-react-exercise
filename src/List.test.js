import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import store from './store';
import List from './List';

describe('List component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  
    it('renders the UI as expected', () => {
      const tree = renderer
        .create([ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ].map(id => store.allCards[id]))
        .toJSON();
      expect(tree).toMatchSnapshot();  
    });

  });