import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import './App.scss'
import Browser from './components/Browser/Browser'
import Mobile from './components/Mobile/Mobile'

const App = () => {
  return (
    <>
      <BrowserView>
        <Browser />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </>

  )
}

export default App