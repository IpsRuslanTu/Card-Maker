import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import Images from './Images';
import Texts from './Texts';

const Canvas = (props: StateProps) => {

    return (
        <div style={{
            background: props.colorBG, 
            width: props.widthBG + 'px', 
            height: props.heightBG + 'px',
            position: "relative"
        }}>
            <Images />
            <Texts />
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>

function mapStateToProps(state: RootState) {
    return {
        colorBG: state.backgroundReducer.bgColor,
        widthBG: state.backgroundReducer.width,
        heightBG: state.backgroundReducer.height,
    }
}

export default connect(mapStateToProps)(Canvas);