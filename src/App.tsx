import { useState } from 'react'
import './App.scss'
import CardItem from './components/CardItem'
import FirmFacts from './components/FirmFacts';
import CardButton from './components/CardButton';

function App() {
  return (
    <>
      <div className="container">
        <h1 className="main-heading">Firm facts</h1>

        <FirmFacts>
          <CardItem variant="main">
            <CardButton>This a two lines button that terminates with...</CardButton>
          </CardItem>
          <CardItem>
            <CardButton variant="selected">This a two lines button that terminates with...</CardButton>
          </CardItem>
          <CardItem>
            <CardButton variant="not-icon">This a one lines button</CardButton>
          </CardItem>
          <CardItem>
            <CardButton>This a two lines button that terminates with...</CardButton>
          </CardItem>
          <CardItem variant="border">
            <CardButton>This a two lines button that terminates with...</CardButton>
          </CardItem>
          <CardItem variant="border">
            <CardButton variant="disabled">This a two lines button that terminates with...</CardButton>
          </CardItem>
          <CardItem variant="border">
            <CardButton>This a two lines button that terminates with...</CardButton>
          </CardItem>
        </FirmFacts>
      </div>
    </>
  )
}

export default App
