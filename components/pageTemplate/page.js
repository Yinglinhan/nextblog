import Head from 'next/head'
import styles from './page.module.scss'
import Nav from '../nav/nav'



export default function Page({children}) {

  return (
    <>
       
        <Head>
            <title>三木</title>
        </Head>
        <div className={styles.container}>
            
            <Nav></Nav>
        
            {children}
        </div>


    </>
  )
} 