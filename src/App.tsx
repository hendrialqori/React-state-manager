import { memo, useState } from 'react'
import ReduxComponent from "./Redux"

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
      <ReduxComponent />
    </main>
  )
}



export default App