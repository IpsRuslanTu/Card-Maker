import { useSelector, connect } from 'react-redux';
import { changeBackground, changeHeigthCanvas, changeWidthCanvas } from '../../store/backgroundReducer';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescBackground = (props: Props) => {

    const visibleDescBackground = useSelector((state: RootState) => state.buttonsReducer.visibleDescBackground);

    return (
        <div 
            className={styles.desc} 
            style={ visibleDescBackground ? {display: "block"} : {display: "none"} }
        >
            <p className={styles.title}>Background</p>
            <p className={styles.label}>Color background:</p>
            <input 
                className={styles.inputColor}
                onChange={(e) => props.changeBackground(e.target.value)}
                type="color" 
            />

            <p className={styles.title}>Size canvas</p>
            <p className={styles.label}>Width:</p>
            <input 
                className={styles.input} 
                type="number" 
                value={props.width} 
                onChange={(e) => props.changeWidthCanvas(Number(e.target.value))} 
            />
            <p className={styles.label}>Height:</p>
            <input 
                className={styles.input} 
                type="number" 
                value={props.height} 
                onChange={(e) => props.changeHeigthCanvas(Number(e.target.value))} 
            />
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps & DispatchProps;

function mapStateToProps(state: RootState) {
    return {
        bgColor: state.backgroundReducer.bgColor,
        width: state.backgroundReducer.width,
        height: state.backgroundReducer.height
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeBackground: (newColor: string) => dispatch(changeBackground(newColor)),
        changeWidthCanvas: (newWidth: number) => dispatch(changeWidthCanvas(newWidth)),
        changeHeigthCanvas: (newHeight: number) => dispatch(changeHeigthCanvas(newHeight))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DescBackground);