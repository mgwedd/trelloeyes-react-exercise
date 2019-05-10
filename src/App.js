import React from 'react';
import List from './List';
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

export default class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { title: 'First card', content: 'lorem ipsum' },
      'b': { title: 'Second card', content: 'lorem ipsum' },
      'c': { title: 'Third card', content: 'lorem ipsum' },
      'd': { title: 'Fourth card', content: 'lorem ipsum' },
      'e': { title: 'Fifth card', content: 'lorem ipsum' },
      'f': { title: 'Sixth card', content: 'lorem ipsum' },
      'g': { title: 'Seventh card', content: 'lorem ipsum' },
      'h': { title: 'Eighth card', content: 'lorem ipsum' },
      'i': { title: 'Ninth card', content: 'lorem ipsum' },
      'j': { title: 'Tenth card', content: 'lorem ipsum' },
      'k': { title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { title: 'Twelth card', content: 'lorem ipsum' },
      'm': { title: 'Thirteenth card', content: 'lorem ipsum' },
    }
  }
  handleDeleteCard = (id) => {
    // remake the lists excluding the card referred to by "id" from those lists. 
    // Update to state, affecting all list components.
    const newLists = this.state.lists.map( ( listObj ) => {
      listObj.cardIds = listObj.cardIds.filter( existingID => existingID !== id );
      return listObj;
    });
    this.setState({lists: newLists});
  }

  randomCardHandler = (listId) => {
    const randomCard = newRandomCard();
    const newLists = this.state.lists.map(list => {
      if (list.id === listId) {
	      return {
          ...list,
          cardIds: [...list.cardIds, randomCard.id]
        };
      }
      return list;
    });

    this.setState({
      allCards: {...this.state.allCards, [ randomCard.id ] : randomCard },
      lists: newLists
    });
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              listId ={list.id}
              header={list.header}
              cards={list.cardIds.map(( id ) => {
                const card = this.state.allCards[id];
                card.id = id;
                return card;
              })
              }
              handleDeleteCard={this.handleDeleteCard}
              randomCardHandler={this.randomCardHandler}
            />
          ))}
        </div>
      </main>
    );
  }
}
