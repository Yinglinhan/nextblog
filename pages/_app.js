import '../styles/globals.css'
import { NavState } from '../utilities/context'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [v,setV] = useState('home')
  return (
    <NavState.Provider value={{v,setV}}>
      <Component {...pageProps} />
    </NavState.Provider>
    
  )
  
}

export default MyApp
