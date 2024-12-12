import React from 'react'
import Popular from '../component/popular/Popular'
import Hero from '../component/Hero/Hero'
import Offers from '../component/offers/Offers'
import NewCollections from '../component/NewCollections/NewCollections'
import NewsLetter from '../component/NewsLetter/NewsLetter'

export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
