import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescSave = () => {

    const visibleDescSave = useSelector((state: RootState) => state.buttonsDesc.visibleDescSave);

    return (
        <div className={styles.desc} style={(visibleDescSave === 1) ? {display: "block"} : {display: "none"}}>
            <p className={styles.title}>Choose format:</p>
            <button className={styles.button}>PNG</button>
            <button className={styles.button}>JPEG</button>
        </div>
    )
}

export default DescSave
