import styles from './nav.module.scss'
import Link from 'next/link'

import { NavState } from '../../utilities/context'
import { useContext, useEffect } from 'react'


export default function Nav(){
    // const [cn,setCn ] = useState(styles.nav)
    const navState = useContext(NavState)
    
    // console.log(window)
    useEffect(()=>{
        console.log(111)
    })

    console.log(1)

    return (
        <>

            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <Link href="/">
                        <a className={navState.v === 'home' ? `${styles.home}` : `` } onClick={()=>{
                            navState.setV('home')
                        }}>Home</a>
                    </Link>

                    <Link href="/series">
                        <a className={navState.v === 'series' ? `${styles.nav} ${styles.series}` : `${styles.nav}` } onClick={
                            ()=>{
                                navState.setV('series')
                            }
                        }>系列视频</a>
                    </Link>
                </div>
                <div className={styles.rightSide}>
                    <Link href="/summary">
                        <a className={navState.v === 'summary' ? `${styles.nav} ${styles.summary}` : `${styles.nav}` } onClick={
                            ()=>{
                                navState.setV('summary')
                            }
                        }>学习总结</a>
                    </Link>
                    <Link href="/dairy">
                        <a className={navState.v === 'dairy' ? `${styles.nav} ${styles.dairy}` : `${styles.nav}` } onClick={
                            ()=>{
                                navState.setV('dairy')
                            }
                        }>些许记录
                        </a>
                    </Link>
                </div>
                
            </div>
            <div className={styles.logo}>
                    <svg width="58" height="27" viewBox="0 0 58 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.9573 0.564941C37.8032 0.564941 32.0034 6.32138 32.0034 13.422C32.0034 20.5227 37.8032 26.2791 44.9573 26.2791C52.1114 26.2791 57.9112 20.5227 57.9112 13.422C57.9117 6.32138 52.1119 0.564941 44.9573 0.564941ZM48.6744 17.9285L46.2437 15.516V18.9442H43.6714V15.4481L41.2407 17.8601L39.4217 16.0546L42.7542 12.747H39.8328V10.1939H43.6709V7.90041H46.2432V10.1939H50.0812V12.747H47.0909L50.4924 16.1231L48.6744 17.9285Z" fill="#06011E"/>
                        <path d="M25.025 6.99635C23.2956 4.02365 20.5036 1.89707 17.1629 1.00849C13.8222 0.119904 10.3325 0.575754 7.3374 2.29218C4.34225 4.0086 2.19961 6.77971 1.30432 10.0959C0.409024 13.4116 0.868316 16.8745 2.5977 19.8478C4.32709 22.8205 7.11913 24.947 10.4598 25.8356C11.5756 26.1323 12.7075 26.2791 13.8319 26.2791C16.0753 26.2791 18.29 25.6953 20.2853 24.5519C23.2805 22.8355 25.4231 20.0644 26.3184 16.7487C27.2137 13.4325 26.7544 9.96905 25.025 6.99635ZM21.8928 7.17804L4.32275 17.2465C3.903 16.2262 3.65602 15.1549 3.58724 14.0679L19.487 4.95632C20.4012 5.55892 21.2126 6.3072 21.8928 7.17804ZM8.69144 4.6198C10.2692 3.71563 12.0202 3.25387 13.7951 3.25387C14.6769 3.25387 15.5651 3.36837 16.4398 3.59898L3.92629 10.7695C4.63743 8.15694 6.32891 5.97338 8.69144 4.6198ZM5.66434 19.5811L23.2599 9.49868C23.6975 10.5303 23.9559 11.6161 24.0322 12.7187L8.08754 21.855C7.16354 21.2384 6.3457 20.4729 5.66434 19.5811ZM18.9318 22.2238C16.5628 23.5811 13.8032 23.9418 11.1612 23.2392C11.145 23.2349 11.1287 23.2301 11.1119 23.2252L23.7154 16.0031C23.711 16.0193 23.7072 16.0359 23.7029 16.0526C22.995 18.6748 21.3003 20.8664 18.9318 22.2238Z" fill="#06011E"/>
                    </svg>

                </div>
        </>
    )
}