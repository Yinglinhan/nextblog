import '../styles/globals.css'
import { NavState } from '../utilities/context'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Router } from 'next/router'


function MyApp({ Component, pageProps ,router  }) {
  const [v,setV] = useState('home')
  const a = '我是从_app.js这个页面传进来的'
  return (
    <NavState.Provider value={{v,setV}}>
      <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} navState={a} key={router.route}/>
      </AnimatePresence>
    </NavState.Provider>
    
  )
  
}

export default MyApp
