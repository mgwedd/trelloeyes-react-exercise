import React from 'react';
import List from './List';
import './App.css';

export default class App extends React.Component {

  // In the case where no store is passed as a prop into this App component, use these default values. 
  // static props are props of the class, but not instances of the class, unless no actual props are passed in.
  // think of it as an object merge. 
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };
  
  render() {
    const { store } = this.props
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
        {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}
