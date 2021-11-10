import React from 'react'
import '../global/global.css'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'


export default function Index() {

  return (
    <div>
      <title>Recipes</title>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
