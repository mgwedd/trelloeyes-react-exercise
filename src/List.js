import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card, index) => 
                    <Card 
                        title={card.title} 
                        content={card.content} 
                        cardId={card.id}
                        key={index}
                        handleDeleteCard={props.handleDeleteCard} 
                        randomCardHandler={props.randomCardHandler}
                    />
                )}
                <button
                    type='button'
                    className='List-add-button'
                    onClick={() => props.randomCardHandler(props.listId)}
                >
                    + Add Random Card
                </button>
            </div>
        </section>
    );
}
