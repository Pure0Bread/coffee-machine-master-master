import React from 'react'
import { Button } from '../Button'

export default function Profile() {
    return (
        <div >
            <h1>Hello Everyone</h1>
            <p>nice to meet you!</p>
            <div className='btnP'>
                <Button buttonSize='btn--medium' buttonStyle='btn--primary'>Profile</Button>
            </div>
            
        </div>
    )
}

