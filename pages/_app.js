import '../styles/globals.css'
import { NavState } from '../utilities/context'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Router } from 'next/router'
import Head from 'next/head'


function MyApp({ Component, pageProps ,router  }) {
  const [v,setV] = useState('home')
  const a = '我是从_app.js这个页面传进来的'
  return (
    <NavState.Provider value={{v,setV}}>
      <Head>
        <link href="https://cloudcache.tencent-cloud.com/open/qcloud/video/tcplayer/tcplayer.css" rel="stylesheet" />
        <script src="https://cloudcache.tencent-cloud.com/open/qcloud/video/tcplayer/libs/hls.min.0.13.2m.js"></script>

        <script src="https://cloudcache.tencent-cloud.com/open/qcloud/video/tcplayer/tcplayer.v4.1.min.js"></script>
      </Head>
      <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} navState={a} key={router.route}/>
      </AnimatePresence>
    </NavState.Provider>
    
  )
  
}

export default MyApp
