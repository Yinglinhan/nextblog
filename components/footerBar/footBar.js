import styles from './footBar.module.scss'
import Link from 'next/link'


export default function FootBar(){
    return (
            <div className={styles.footContainer}>
                <div className={styles.content}>

                </div>
                <div className={styles.hints}>
                    <span>大学金融学</span>
                    <span>自学设计</span>
                    <span>喜欢编程</span>
                    <span>热爱电影</span>
                    <span>相信输出是最好的学习</span>
                </div>
                <div className={styles.uptoTop}>
                    
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