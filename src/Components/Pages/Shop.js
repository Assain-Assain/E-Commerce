import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewColection from '../NewColections/NewColection'
import NewsLetter from '../NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewColection/>
        <NewsLetter/>
    </div>
  )
}

export default Shop