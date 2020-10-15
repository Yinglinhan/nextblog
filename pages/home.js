import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Page from '../components/pageTemplate/page'
import Headtitle from '../components/homeTitle/headTitle'
import FootBar from '../components/footerBar/footBar'
import PageLoad from '../components/pageLoad/pageLoad'



import CacheImg from '../utilities/cacheImg'
import { useEffect, useRef, useState } from 'react'
import { NavState } from '../utilities/context'
import { motion } from 'framer-motion'

// 内核
import cloudbase from "@cloudbase/js-sdk";;
// 登录模块
import { registerAuth } from "@cloudbase/js-sdk/auth";


let intervals;
const app = cloudbase.init({
  env: 'testnext-1gern0t2fef69091'
});
console.log(app)
const auth = app.auth();

async function login(){
  await auth.anonymousAuthProvider().signIn();
  // 匿名登录成功检测登录状态isAnonymous字段为true
  const loginState = await auth.getLoginState();
  console.log(loginState.isAnonymousAuth); // true
  const db = app.database();

    // 2. 构造查询语句
    db
      // collection() 方法获取一个集合的引用
      .collection("test")
      // where() 方法传入一个 query 对象，数据库返回集合中字段等于指定值的 JSON 文档。
      // .where({
      //   name: "a"
      // })
      // get() 方法会触发网络请求，往数据库取数据
      .get()
      .then(function (res) {
        console.log(res);
        // 输出 [{ "name": "The Catcher in the Rye", ... }]
      });

}

login();



export default function Home() {
  
  const refImg = useRef(null)
  const imgs =[
    "/img/hero.jpg",
    "/img/cases/cinema.jpg",
    "/img/cases/lpxj.jpg",
    "/img/cases/ts.jpg",
    "/img/cases/xwlj.jpg",
    "/img/cases/zr.jpg"
  ]

  const [isShowCases,setCase] = useState(false)
  
  useEffect(()=>{
    const player = TCPlayer('player',{
      fileID:'5285890808586195016',
      appID:'1256266192',
      bigPlayButton:false
    })
  },[])

  function changePic() {
      refImg.current.src=imgs[Math.ceil(Math.random() * 5)]
      intervals = setInterval(() => {
        refImg.current.src=imgs[Math.ceil(Math.random() * 5)]
      }, 300);
    
    
    setCase(true)
  }

  function stopChange(){
    clearInterval(intervals)
    console.log(intervals)
    refImg.current.src=imgs[0]
    setCase(false)
  }

  const tempData = [1,2,3]

  
  return (
    <>
      <Head>

      </Head>
      <Page>
        <div className={styles.heroBar} >
          <svg width="1803" height="897" viewBox="0 0 1803 897" fill="none" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
              <path d="M1122.17 609.505H988.603C980.826 609.505 973.369 612.522 967.87 617.893C962.371 623.263 959.282 630.546 959.282 638.141V866.512C959.282 874.106 962.371 881.39 967.87 886.76C973.369 892.13 980.826 895.147 988.603 895.147H1122.17C1129.95 895.147 1137.41 892.13 1142.91 886.76C1148.4 881.39 1151.49 874.106 1151.49 866.512V638.141C1151.49 630.546 1148.4 623.263 1142.91 617.893C1137.41 612.522 1129.95 609.505 1122.17 609.505ZM1063.81 859.442H1050.65V645.211H1063.81V859.442Z" fill="black"/>
              <path d="M165.315 285.642H36.85V35.0506H0.857422V0H201.308V35.0506H165.315V285.642Z" fill="black"/>
              <path d="M413.904 0V285.642H321.69V161.329H309.462V285.642H212.859V0H309.462V125.578H321.69V0H413.904Z" fill="black"/>
              <path d="M630.578 0V36.1308H587.632V119.057H622.223V155.355H587.632V249.808H630.578V286.236H429.278V0H630.578Z" fill="black"/>
              <path d="M1575.57 609.505V645.636H1532.63V728.563H1567.22V764.861H1532.63V859.313H1575.57V895.742H1374.27V609.505H1575.57Z" fill="black"/>
              <path d="M689.736 896.414C699.423 896.414 707.275 888.561 707.275 878.875C707.275 869.188 699.423 861.335 689.736 861.335C680.049 861.335 672.196 869.188 672.196 878.875C672.196 888.561 680.049 896.414 689.736 896.414Z" fill="black"/>
              <g className={styles.designerSvg} fill="black"  onMouseEnter={changePic} onMouseLeave={stopChange}>
                <path d="M947.136 406.433V333.82C947.136 326.111 944.119 318.718 938.749 313.267C933.379 307.815 926.095 304.753 918.5 304.753H780.333C772.738 304.753 765.454 307.815 760.084 313.267C754.714 318.718 751.697 326.111 751.697 333.82V561.922C751.697 569.631 754.714 577.025 760.084 582.476C765.454 587.927 772.738 590.989 780.333 590.989H918.5C926.095 590.989 933.379 587.927 938.749 582.476C944.119 577.025 947.136 569.631 947.136 561.922V419.491H849.774L849.345 455.826H892.012L849.059 478.353H836.888V343.246H849.774V406.411L947.136 406.433Z" />
                <path d="M1363.75 304.753V340.884H1320.8V423.81H1355.4V460.108H1320.8V554.561H1363.75V590.989H1162.45V304.753H1363.75Z" />
                <path d="M414.159 304.753V340.884H371.213V423.81H405.804V460.108H371.213V554.561H414.159V590.989H212.859V304.753H414.159Z" />
                <path d="M738.447 304.753H641.28V591.839H738.447V304.753Z" />
                <path d="M172.703 304.753H0.857422V590.395H172.703C180.289 590.395 187.565 587.378 192.93 582.008C198.294 576.637 201.308 569.354 201.308 561.759V333.389C201.308 325.794 198.294 318.51 192.93 313.14C187.565 307.77 180.289 304.753 172.703 304.753ZM126.406 553.975H113.566V339.744H126.406V553.975Z" />
                <path d="M1152.34 304.753H1086.4V345.444L1080.64 338.113L1061.14 304.753H959.282V590.989H1030.84V554.715L1036.6 562.039L1056.1 590.989H1152.34V304.753Z" />
                <path d="M1495.89 590.989H1575.91L1563.07 555.384L1575.91 538.505V333.818C1575.91 326.11 1572.9 318.717 1567.55 313.266C1562.2 307.815 1554.94 304.753 1547.37 304.753H1374.27V590.989H1472.37V551.388L1495.89 590.989ZM1482.01 508.937H1472.02V342.538H1482.01V508.937Z" />
                <path d="M629.134 304.753H458.019C450.396 304.753 443.086 307.815 437.696 313.266C432.306 318.717 429.278 326.11 429.278 333.818V531.907L472.389 554.658H429.278V590.989H599.078C603.025 590.989 606.934 590.203 610.581 588.675C614.228 587.147 617.542 584.908 620.333 582.084C623.124 579.261 625.338 575.91 626.848 572.221C628.358 568.532 629.135 564.579 629.134 560.587V364.497L588.896 343.264H629.134V304.753Z" />
              </g>
              <path d="M622.339 609.505H556.391V650.197L550.638 642.865L531.134 609.505H429.278V895.742H500.839V859.467L506.591 866.792L526.095 895.742H622.339V609.505Z" fill="black"/>
              <path d="M200.713 720.208V638.074C200.713 630.497 197.696 623.23 192.326 617.873C186.956 612.515 179.672 609.505 172.078 609.505H29.4932C21.8985 609.505 14.6149 612.515 9.24465 617.873C3.8744 623.23 0.857422 630.497 0.857422 638.074V866.579C0.857422 874.156 3.8744 881.422 9.24465 886.78C14.6149 892.137 21.8985 895.147 29.4932 895.147H172.078C179.672 895.147 186.956 892.137 192.326 886.78C197.696 881.422 200.713 874.156 200.713 866.579V733.021H129.124V859.437H116.238V645.887H129.124V720.165L200.713 720.208Z" fill="black"/>
              <path d="M951.305 720.208V638.074C951.305 630.497 948.288 623.23 942.918 617.873C937.548 612.515 930.264 609.505 922.67 609.505H780.085C772.491 609.505 765.207 612.515 759.837 617.873C754.466 623.23 751.45 630.497 751.45 638.074V866.579C751.45 874.156 754.466 881.422 759.837 886.78C765.207 892.137 772.491 895.147 780.085 895.147H922.67C930.264 895.147 937.548 892.137 942.918 886.78C948.288 881.422 951.305 874.156 951.305 866.579V733.021H879.716V859.437H866.83V645.887H879.716V720.165L951.305 720.208Z" fill="black"/>
              <path d="M410.337 895.147L368.242 609.505H259.37L217.276 895.147H269.192L276.208 859.442H350.001L358.42 895.147H410.337Z" fill="black"/>
              <path d="M1334.3 609.505H1162.45V895.147H1334.3C1341.88 895.147 1349.16 892.13 1354.52 886.76C1359.89 881.39 1362.9 874.106 1362.9 866.512V638.141C1362.9 630.546 1359.89 623.263 1354.52 617.893C1349.16 612.522 1341.88 609.505 1334.3 609.505ZM1288 858.728H1275.16V644.497H1288V858.728Z" fill="black"/>
              <path d="M1776.83 777.724L1802.85 751.545L1740.69 689.006L1714.67 715.185L1776.83 777.724Z" fill="black"/>
              <path d="M1714.7 787.92L1740.72 814.099L1802.87 751.56L1776.85 725.381L1714.7 787.92Z" fill="black"/>
              <path d="M1692.46 732.469L1692.46 769.492L1776.14 769.492L1776.14 732.469L1692.46 732.469Z" fill="black"/>
            </svg>
          <div className={isShowCases ? `${styles.picFrame} ${styles.picFrameAdd}` : styles.picFrame}>
            <img src="/img/hero.jpg" alt="photo" className={isShowCases ? styles.showCases : styles.photoContent } ref={refImg}/>
          </div>
        </div>
        <div className={styles.list}>
          {/* {tempData.map(item => <Headtitle key={item}></Headtitle>)} */}
          <video id="player" width="1280" height="720" preload="auto">
          </video>
        </div>
        <FootBar>

        </FootBar>
      </Page>
    </>
  )
} 
