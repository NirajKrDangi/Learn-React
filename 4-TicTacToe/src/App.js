import Card from './components/Card';
import Grid from './components/Grid';
import './App.css'

import React from 'react'

function App() {
  return (
    <>
        {/* <Card player='X'/> */}
        <Grid noOfCards={9}/>
    </>
  )
}

export default App