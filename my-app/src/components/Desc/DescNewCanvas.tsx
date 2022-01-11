import { connect, useSelector } from 'react-redux';
import { createDefaultBG } from '../../store/backgroundReducer';
import { clearImages } from '../../store/imgReducer';
import { RootState } from '../../store/store';
import { clearTexts } from '../../store/textReducer';
import styles from './Desc.module.css'

const DescNewCanvas = (props :DispatchProps) => {

    const visibleDescNew = useSelector((state: RootState) => state.buttonsReducer.visibleDescNew);

    const attention = () :void => {
        if (window.confirm('Delete Canvas? All your data will be lost')) {
            props.createDefaultBG();
            props.clearImages();
            props.clearTexts();
        };
    }
    
    return (
        <div className={styles.desc} style={ visibleDescNew ? {display: "block"} : {display: "none"} }>
            <button className={styles.button} onClick={attention}>DeleteCanvas?</button>
        </div>
    )
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        createDefaultBG: () => dispatch(createDefaultBG()),
        clearImages: () => dispatch(clearImages()),
        clearTexts: () => dispatch(clearTexts())
    }
}

export default connect(null, mapDispatchToProps)(DescNewCanvas);