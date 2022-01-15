import { connect, useSelector } from 'react-redux';
import { insertCircle } from '../../store/figuresReducer';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescArtObj = (props: Props) => {

    const visibleDescArtObj = useSelector((state: RootState) => state.buttonsReducer.visibleDescArtObj);

    return (
        <div className={styles.desc} style={visibleDescArtObj ? {display: "block"} : {display: "none"}}>
            <p className={styles.title}>Choose art-object:</p>
            <button className={styles.button} onClick={props.insertCircle}>Circle</button>
            <button className={styles.button}>Rectangle</button>
            <button className={styles.button}>Triangle</button>
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps & DispatchProps;

function mapStateToProps(state: RootState) {
    return {
        
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        insertCircle: () => dispatch(insertCircle())
    }
}

export default connect(null, mapDispatchToProps)(DescArtObj);