import { memo, useState } from 'react'
// import ReduxComponent from "./Redux"
import ReduxToolkitProvider from './Redux-Toolkit'

const ReactIcon = memo(function _() {
  return <img  src="/react.svg" alt="react-icon" />
})

const App = (): JSX.Element => {
  return (
    <main>
      <header className='main-header'>
        <ReactIcon />
        <h2>React state maneger</h2>
      </header>
      <ReduxToolkitProvider />
    </main>
  )
}



export default App