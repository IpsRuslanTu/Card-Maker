import styles from './Desc.module.css'

const TextAtr = (props: any) => {

    return (
        <div>
            <p className={styles.label}>{props.title}</p>
            <select className={styles.select} name="fontSize">
                {props.arr.map((val: string) => <option key={val} value={val}>{val}</option>)}
            </select>
        </div>
    )
}

export default TextAtr
