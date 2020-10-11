import styles from "./headTitle.module.scss"


function mouseOver(){
    console.log(1231312312313131231231)
}

export default function Headtitle(){
    return (
        <div className={styles.titleBox} onMouseOver={mouseOver}>
            <div className={styles.titleLine}>
                <h1 className={styles.titleName}>到底什么是DNS</h1>
                <time className={styles.titleDate}>2020.9.24</time>
            </div>
        </div>
    )
}