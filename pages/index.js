import styles from '../styles/Index.module.scss'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import CacheImg from '../utilities/cacheImg'

function startNav(router){
    router.push('/home','/')
}

export default function Index(){
    const router = useRouter()
    console.log(router)

  
    useEffect(()=>{
        const imgSetting = {
            imgs:["/img/hero.jpg"],
            startNav,
            router
          }
        CacheImg(imgSetting)
        // console.log('yes finish')
        // 
    },[])

    // 动画参数 -------------
    // logo旋转
    const moonRotation = {
        rotate:360,
        transition:{
            duration:2.5,
            loop:Infinity
        }
    }
    // loading退出
    const exitAnimation = {
        y:'-100%',
        transition:{
            duration: 2
        }
    }


    return(
        <motion.div className={styles.container} exit={exitAnimation}>
            <div className={styles.logoBox}>
                <motion.div animate={moonRotation} originX={0.5} originY={0.46}>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.7522 13.506C47.1204 7.26333 41.2571 2.79749 34.2416 0.931453C27.2261 -0.934582 19.8979 0.0227064 13.608 3.62721C7.31818 7.23172 2.81861 13.0511 0.938487 20.0151C-0.94164 26.9781 0.0228779 34.2503 3.6546 40.4941C7.28633 46.7368 13.1496 51.2026 20.1651 53.0687C22.5082 53.6918 24.8854 54 27.2466 54C31.9577 54 36.6086 52.774 40.7988 50.3729C47.0886 46.7684 51.5882 40.949 53.4683 33.9861C55.3484 27.0221 54.3839 19.7487 50.7522 13.506ZM44.1746 13.8876L7.27723 35.0315C6.39575 32.8889 5.87709 30.639 5.73264 28.3564L39.1222 9.22193C41.0422 10.4874 42.746 12.0588 44.1746 13.8876ZM16.4515 8.51525C19.7648 6.61648 23.442 5.64678 27.1693 5.64678C29.021 5.64678 30.8863 5.88723 32.7232 6.37152L6.44465 21.4296C7.93806 15.9433 11.4902 11.3578 16.4515 8.51525ZM10.0946 39.9342L47.0454 18.761C47.9644 20.9273 48.5069 23.2076 48.6673 25.5229L15.1833 44.7093C13.2429 43.4145 11.5254 41.807 10.0946 39.9342ZM37.9564 45.4837C32.9814 48.3342 27.1863 49.0916 21.6381 47.6162C21.604 47.6072 21.5698 47.597 21.5346 47.5868L48.0019 32.4204C47.9928 32.4542 47.9849 32.4892 47.9758 32.5242C46.4892 38.0309 42.9303 42.6333 37.9564 45.4837Z"/>
                    </svg>
                </motion.div>
                <motion.div >
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.7966 0C12.7728 0 0.593201 12.0886 0.593201 27C0.593201 41.9114 12.7728 54 27.7966 54C42.8203 54 55 41.9114 55 27C55.0011 12.0886 42.8214 0 27.7966 0ZM35.6026 36.4637L30.4981 31.3974V38.5965H25.0962V31.2547L19.9917 36.3199L16.1717 32.5285L23.17 25.5825H17.0351V20.221H25.0951V15.4046H30.497V20.221H38.557V25.5825H32.2772L39.4203 32.6722L35.6026 36.4637Z" />
                    </svg>

                </motion.div>
            </div>
        </motion.div>
    )
}