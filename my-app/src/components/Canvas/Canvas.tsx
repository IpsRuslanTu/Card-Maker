import { connect } from 'react-redux';
import { RootState } from '../../store/store';

const Canvas = (props: StateProps) => {

    return (
        <div style={{
            background: props.colorBG, 
            width: props.widthBG + 'px', 
            height: props.heightBG + 'px',
            position: "relative"
        }}>
            {   
                (props.newImage.arr.length > 0) 
                    ? props.newImage.arr.map( 
                        (item, index) => 
                            <img 
                                src={props.newImage.arr[index].src}  
                                style={{
                                    position: "absolute",
                                    display: "block",

                                }} 
                            />) 
                    : null
            }
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>

function mapStateToProps(state: RootState) {
    return {
        colorBG: state.stateBackground.bgColor,
        widthBG: state.stateBackground.width,
        heightBG: state.stateBackground.height,
        newImage: state.workWithImg
    }
}

export default connect(mapStateToProps)(Canvas);