import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescArtObj = () => {

    const visibleDescArtObj = useSelector((state: RootState) => state.buttonsReducer.visibleDescArtObj);

    return (
        <div className={styles.desc} style={visibleDescArtObj ? {display: "block"} : {display: "none"}}>
            <p className={styles.title}>Choose art-object:</p>
            <button className={styles.button}>Circle</button>
            <button className={styles.button}>Rectangle</button>
            <button className={styles.button}>Triangle</button>
        </div>
    )
}

export default DescArtObj
