import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import Figures from './Figures';
import Images from './Images';
import Texts from './Texts';

const Canvas = (props: StateProps) => {

    return (
        <div style={{
            backgroundImage: `url(${props.BGImage})`,
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
            backgroundColor: props.colorBG, 
            width: props.widthBG + 'px', 
            height: props.heightBG + 'px',
            position: "relative"
        }}>
            <Images />
            <Texts />
            <Figures />
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>

function mapStateToProps(state: RootState) {
    return {
        colorBG: state.backgroundReducer.bgColor,
        widthBG: state.backgroundReducer.width,
        heightBG: state.backgroundReducer.height,
        BGImage: state.backgroundReducer.BGImage
    }
}

export default connect(mapStateToProps)(Canvas);