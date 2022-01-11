import React, { useRef } from 'react';
import { connect, useDispatch } from 'react-redux'
import { moveImg } from '../../store/imgReducer';
import { RootState } from '../../store/store'

const Images = (props: Props) => {

    const imgBlock = useRef<HTMLImageElement>(null);
    
    return ( 
        <>
        {
            (props.ReducerImg.arr.length > 0) ? 
                props.ReducerImg.arr.map((item, index) => <img 
                    ref={imgBlock}
                    // onDragStart={(e) => e.preventDefault()}
                    // onClick={() => props.moveImg(index)}
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