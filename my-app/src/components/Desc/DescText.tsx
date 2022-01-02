import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescText = () => {

    const visibleDescText = useSelector((state: RootState) => state.buttonsDesc.visibleDescText);

    const addText = () => {
        
    }

    return (
        <div className={styles.desc} style={ (visibleDescText === 1) ? {display: "block"} : {display: "none"}}>
            <p className={styles.title}>Text</p>
            <button className={styles.button} onClick={addText}>Add Text</button>

            <p className={styles.label}>Font size:</p>
            <select className={styles.select} name="fontSize">
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
            </select>

            <p className={styles.label}>Font family:</p>
            <select className={styles.select} name="fontFamily">
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Calibri">Calibri</option>
            </select>

            <p className={styles.label}>Color text:</p>
            <input type="color" name="colorPickerText" id="colorPickerText" />

        </div>
    )
}

export default DescText;
