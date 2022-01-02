import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescBackground = () => {

    const dispatch = useDispatch()
    const visibleDescBackground = useSelector((state: RootState) => state.buttonsDesc.visibleDescBackground);

    let colorBG : string | null;

    const getColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
        colorBG = e.target.value;
    }

    const changeBackground = () => {
        dispatch({type: "CHANGE_BACKGROUND", payload: (colorBG !=null) ? colorBG : '#cec7b4'})
    }

    return (
        <div 
            className={styles.desc} 
            style={ (visibleDescBackground === 1) ? {display: "block"} : {display: "none"} }
        >
            <p className={styles.title}>Background</p>
            <button className={styles.button} onClick={changeBackground}>Change Background</button>
            <p className={styles.label}>Color background:</p>
            <input type="color" name="colorPickerText" id="colorPickerText" onChange={getColor} />
        </div>
    )
}

export default DescBackground;