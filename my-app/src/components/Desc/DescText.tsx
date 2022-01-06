import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'
import TextAtr from './TextAtr';

const DescText = () => {

    const visibleDescText = useSelector((state: RootState) => state.buttonsDesc.visibleDescText);

    const fontSizes = ['6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', 
    '28', '30', '32', '34', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', '58', '60']
    const fontFamilies = ['Arial', 'Times New Roman', 'Calibri']
    const fontStyles = ['Regular', 'Cursive', 'Bold', 'Underlined']

    return (
        <div className={styles.desc} style={ visibleDescText ? {display: "block"} : {display: "none"} }>
            <p className={styles.title}>Text</p>
            <button className={styles.button} >Add Text</button>

            <TextAtr arr={fontSizes} title="Font size"/>
            <TextAtr arr={fontFamilies} title="Font family"/>
            <TextAtr arr={fontStyles} title="Font style"/>

            <p className={styles.label}>Color text:</p>
            <input type="color" name="colorPickerText" id="colorPickerText" />

        </div>
    )
}

export default DescText;
