import { useEffect, useRef, useState } from 'react'
import styles from './pageLoad.module.scss'

// function preV(e){
//     e.preventDefault()
//     console.log(e)
// }
// 

export default function PageLoad({show}){
    const loadBlock = useRef(null)
    const [needFade, setFade] = useState(false)
    useEffect(()=>{
        // loadBlock.current.scrollIntoView()
        loadBlock.current.addEventListener('mousewheel',(e)=>{e.preventDefault()},{passive:false})
        // console.log(window.scr)
        // window.scrollTo(0,0)
        // console.log(window)
        // executeScroll()
        scrollToRef()
    },[])
    const scrollToRef = (ref) => window.scrollTo(0,300)
    // const executeScroll = () => {
    //     console.log(loadBlock.current.offsetTop)
    //     scrollToRef(loadBlock)
        
    // }
    

    function fadeOut(){
        console.log('fadeout')
        setFade(true)
    }
    let containerClass = styles.container
    if(show){
        containerClass = `${styles.container} ${styles.animate}`
    }
    if(needFade){
        return null
    }else{
        return (
            <>
                <div className={containerClass} onAnimationEnd={fadeOut} ref={loadBlock} >
                    It's Loading!
                </div>
            </>
        )
    }
    
}