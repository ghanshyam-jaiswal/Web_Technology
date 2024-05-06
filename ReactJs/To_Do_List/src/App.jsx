import React from 'react'
import GlobalContext from './GlobalContext'
import AddToDo from './AddToDo'
import AllTask from './AllTask'

const App = () => {
  return (
    <section>
        <GlobalContext>
            <AddToDo/>
            <AllTask/>
        </GlobalContext>
    </section>
  )
}

export default App