import { connect, useDispatch } from 'react-redux'
import { moveImg } from '../../store/imgReducer';
import { RootState } from '../../store/store'
import Img from './Img';

const Images = (props: Props) => {
    
    return ( 
        <>
        {
            (props.ReducerImg.arr.length > 0) ? 
                props.ReducerImg.arr.map((item, index) => <Img 
                        key={index}
                        index={index} 
                        src={props.ReducerImg.arr[index].src}
                        posX={props.ReducerImg.arr[index].x}
                        posY={props.ReducerImg.arr[index].y}
                    />) : undefined
        }
        </>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps & DispatchProps;

function mapStateToProps(state: RootState) {
    return {
        ReducerImg: state.ReducerImg
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        moveImg: (index: number) => dispatch(moveImg(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);