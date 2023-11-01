import { useState } from 'react'

import './App.css'
import { MyProvider } from './LanguageContext'
import InnerComponent from './InnerComponent'

function App() {

  return (
    <MyProvider>
      <InnerComponent/>
    </MyProvider>
  )
}

export default App
