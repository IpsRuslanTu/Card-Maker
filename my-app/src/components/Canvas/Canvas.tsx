import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import Images from './Image/Image';

const Canvas = (props: StateProps) => {

    return (
        <div style={{
            background: props.colorBG, 
            width: props.widthBG + 'px', 
            height: props.heightBG + 'px',
            position: "relative"
        }}>
            <Images />
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>

function mapStateToProps(state: RootState) {
    return {
        colorBG: state.stateBackground.bgColor,
        widthBG: state.stateBackground.width,
        heightBG: state.stateBackground.height,
        // newImage: state.workWithImg
    }
}

export default connect(mapStateToProps)(Canvas);