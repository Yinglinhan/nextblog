import styles from './footBar.module.scss'
import {motion,useAnimation} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'



const titles = [
    '大学金融学',
    '自学设计',
    '喜欢编程',
    '热爱电影',
    '相信输出是最好的学习'
]
const allContent = {
    '大学金融学':'江西财经大学',
    '自学设计':'平面 品牌 UIUX',
    '喜欢编程':'除了前端 对Swift也很感兴趣',
    '热爱电影':'梦想是当导演',
    '相信输出是最好的学习':'只做通俗易懂的分享'
}

const contentVariants = {
    hidden:{
        x:'-50%',
        opacity:0
    },
    show:{
        x:0,
        opacity:1
    },
    transition:{
        duration:0.5,
        ease:'easeIn'
    }
}


export default function FootBar(){
    // const ref = useRef(null)
    const control = useAnimation()
    const [content,setContent] = useState('')

    // useEffect(()=>{
    //     ref.current.addEventListener('click')
    // },[])


    function mouseInText(e){
        control.start('show')
        const target = e.target
        setContent(allContent[target.innerText])
    }
    
    function mouseOutText(){
        control.start('hidden')
    }
    
    function backToTop(){
        let distance =  document.documentElement.scrollTop
        if(distance > 0) {
            window.scrollTo(0,distance - 60 )
            window.requestAnimationFrame(backToTop)
        }
        
    }



    return (
            <div className={styles.footContainer}>
                <div className={styles.content}>
                    <motion.div className={styles.contentShow}  initial='hidden' animate={control} variants={contentVariants} transition={contentVariants.transition}>
                        {content}
                    </motion.div>
                </div>
                <div className={styles.hints}>
                    {titles.map(
                        (item,index)=> <span key={index} onMouseEnter={mouseInText} onMouseLeave={mouseOutText}>{item}</span>
                        )}
                </div>
                <div className={styles.uptoTop} onClick={backToTop}>
                    
                        <svg width="60" height="53" className={styles.arrow} viewBox="0 0 60 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.941 13.0926L29.5889 0.815918L0.0807416 30.144L12.4328 42.4207L41.941 13.0926Z" fill="black"/>
                            <path d="M46.7524 42.4076L59.1045 30.1309L29.5963 0.80279L17.2442 13.0795L46.7524 42.4076Z" fill="black"/>
                            <path d="M20.588 52.9014L38.0566 52.9014L38.0566 13.4176L20.588 13.4176L20.588 52.9014Z" fill="black"/>
                        </svg>
                    
                    <span>@所有文章及视频均为原创，转载请注明出处</span>
                </div>
            </div>
            

    )
}