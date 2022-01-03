import { useSelector, connect } from 'react-redux';
import { changeBackground } from '../../store/backgroundReducer';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescBackground = (props: Props) => {

    const visibleDescBackground = useSelector((state: RootState) => state.buttonsDesc.visibleDescBackground);
    
    return (
        <div 
            className={styles.desc} 
            style={ visibleDescBackground ? {display: "block"} : {display: "none"} }
        >
            <p className={styles.title}>Background</p>
            <p className={styles.label}>Color background:</p>
            <input 
                onChange={(e) => props.changeBackground(e.target.value)}
                type="color" 
            />
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps & DispatchProps;

function mapStateToProps(state: RootState) {
    return {bgColor: state.stateBackground.bgColor}
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeBackground: (newColor: string) => dispatch(changeBackground(newColor))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DescBackground);