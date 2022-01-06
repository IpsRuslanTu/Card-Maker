import { connect } from 'react-redux'
import { RootState } from '../../../store/store'

const Images = (props: StateProps) => {
    return ( 
        <>
        {
            (props.newImage.arr.length > 0) ? 
            props.newImage.arr.map((item, index) => <img 
                key={index}
                alt=""
                src={props.newImage.arr[index].src}  
                style={{
                    position: "absolute",
                    display: "block",
                    left: props.newImage.arr[index].x,
                    top: props.newImage.arr[index].y
                }} 
            />) : undefined
        }
        </>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>

function mapStateToProps(state: RootState) {
    return {
        newImage: state.workWithImg
    }
}

export default connect(mapStateToProps)(Images);