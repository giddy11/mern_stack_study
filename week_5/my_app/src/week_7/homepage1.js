import React from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from './repository/products'

export default function Homepage1() {
    const {profile_name} = useParams()

  return (
    <div className='home-background'>
        <div>
            <h1>Welcome to MyApp, {profile_name}</h1>

            <div className='home1-container'>
                {
                    getProducts().map(Item => (
                        <div>
                            <img alt='image' src={Item.src}/>
                            <h4>{Item.name}</h4>
                            <p>{Item.amount} ({Item.currency})</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
