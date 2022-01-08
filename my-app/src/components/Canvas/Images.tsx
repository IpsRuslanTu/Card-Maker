import { connect } from 'react-redux'
import { RootState } from '../../store/store'

const Images = (props: StateProps) => {
    return ( 
        <>
        {
            (props.ReducerImg.arr.length > 0) ? 
                props.ReducerImg.arr.map((item, index) => <img 
                    key={index}
                    alt=""
                    src={props.ReducerImg.arr[index].src}  
                    style={{
                        position: "absolute",
                        display: "block",
                        left: props.ReducerImg.arr[index].x,
                        top: props.ReducerImg.arr[index].y
                    }}/>) : undefined
        }
        </>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>

function mapStateToProps(state: RootState) {
    return {
        ReducerImg: state.ReducerImg
    }
}

export default connect(mapStateToProps)(Images);