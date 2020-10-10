import styles from "./headTitle.module.scss"

export default function Headtitle(){
    return (
        <div className={styles.titleBox}>
            <div className={styles.titleLine}>
                <h1 className={styles.titleName}>到底什么是DNS</h1>
                <time className={styles.titleDate}>2020.9.24</time>
            </div>
        </div>
    )
}