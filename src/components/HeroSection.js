import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import latte from '../components/Images/Latte.jpg'
import mocha from '../components/Images/Mocha.jpg'


function HeroSection() {
    return (
        <div className='background'>
            <div className='hero-container'>
           
                <div className='welcome'>
                Have a Coffee with Coffee Machine
                </div>
                <img src={latte} alt=""/>
                <h1>LATTE</h1>
                <p>Caffè latte is a coffee-based drink made primarily from espresso and steamed milk.</p>
                 <p>It consists of one-third espresso, two-thirds heated milk and about 1cm of foam. </p>
                 <p>Depending on the skill of the barista, </p>
                 <p> the foam can be poured in such a way to create a picture</p>
                
                 <div className='hero-btns'>
                     <Button className='btns' 
                     buttonStyle='btn--outline' 
                     buttonSize='btn--large'
                     >BUY
                     </Button>
                 </div>

                 <img src={mocha} alt=""/>
                 <h1>MOCHA</h1>
                <p>A traditional mocha will contain espresso shots, a large amount of steamed milk, </p>
                 <p>some mocha syrup, and is topped with milk foam. </p>
                 <p>The combination of the rich espresso, creamy milk, and sweet chocolate makes for a delicious and addicting drink </p>
                 <p> Mochas are a lot larger than traditional Italian cappuccinos.</p>
                
                 <div className='hero-btns'>
                     <Button className='btns' 
                     buttonStyle='btn--outline' 
                     buttonSize='btn--large'
                     >BUY
                     </Button>
                 </div>
            </div>
        </div>
    )
}

export default HeroSection
