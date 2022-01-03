import { connect, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Canvas = (props: Props) => {

    return (
        <div style={{background: props.color, width: props.width + 'px', height: props.height + 'px'}}></div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
// type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps;

function mapStateToProps(state: RootState) {
    return {
        color: state.stateBackground.bgColor,
        width: state.stateBackground.width,
        height: state.stateBackground.height
    }
}

// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         changeBackground: (newColor: string) => dispatch(changeBackground(newColor))
//     }
// }

export default connect(mapStateToProps)(Canvas);