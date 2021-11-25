import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
      <h1>Check out our Drinks!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/Latte.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Drink'
              path='/services'
            />
            <CardItem
              src='Images/Mocha.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Cards
