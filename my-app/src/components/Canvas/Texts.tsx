import { connect } from 'react-redux'
import { RootState } from '../../store/store'

const Texts = (props: StateProps) => {
    return ( 
        <>
        {
            (props.ReducerText.arr.length > 0) ? 
                props.ReducerText.arr.map((item, index) => <span 
                    key={index}
                    contentEditable="true"
                    style={{
                        position: 'absolute',
                        display: 'inline-block',
                        fontSize: props.ReducerText.arr[index].fontSize + 'px',
                        fontFamily: props.ReducerText.arr[index].fontFamily,
                        fontWeight: Number(props.ReducerText.arr[index].fontWeight),
                        color: props.ReducerText.arr[index].fontColor,
                        top: props.ReducerText.y,
                        left: props.ReducerText.x
                    }}>{props.ReducerText.arr[index].text}</span> ) : undefined
        }
        </>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>

function mapStateToProps(state: RootState) {
    return {
        ReducerText: state.ReducerText
    }
}

export default connect(mapStateToProps)(Texts);