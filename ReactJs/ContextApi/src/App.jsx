import React from 'react'
import ContextApi from './ContextApi'
import Consumer from './Consumer'

export const App = () => {
  return (
    <div>
        <ContextApi>
            <Consumer/>
        </ContextApi>
    </div>
  )
}
export default App