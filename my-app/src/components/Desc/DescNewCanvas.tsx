import { connect, useSelector } from 'react-redux';
import { createDefaultBG } from '../../store/backgroundReducer';
import { clearImgState } from '../../store/insertImgReducer';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescNewCanvas = (props :DispatchProps) => {

    const visibleDescNew = useSelector((state: RootState) => state.buttonsReducer.visibleDescNew);

    const attention = () :void => {
        if (window.confirm('Delete Canvas? All your data will be lost')) {
            props.createDefaultBG();
            props.clearImgState()
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
        clearImgState: () => dispatch(clearImgState())
    }
}

export default connect(null, mapDispatchToProps)(DescNewCanvas);