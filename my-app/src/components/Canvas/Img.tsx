import { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { positionType, useDragAndDrop } from '../../customHooks/useDragAndDrop';
import { moveImg } from '../../store/imgReducer';
import { RootState } from '../../store/store';

interface PropsType {
    key: number,
    index: number,
    src: string,
    posX: number,
    posY: number
}

const Img = (props: PropsType & Props) => {

    const imgBlock = useRef<HTMLImageElement>(null);

    const pos: positionType = {x: props.posX, y: props.posY};

    useDragAndDrop(imgBlock, pos, props.moveImg, props.index);
    
    return (
        <img 
            ref={imgBlock}
            onDragStart={(e) => e.preventDefault()}
            // onMouseUp={() => props.moveImg(props.index, pos.x, pos.y)}
            key={props.index}
            alt=""
            src={props.src}  
            style={{
                cursor: "pointer",
                position: "absolute",
                display: "block",
                left: pos.x,
                top: pos.y
            }}
        />
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps & DispatchProps;

function mapStateToProps(state: RootState) {
    return {

    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        moveImg: (index: number, x: number, y: number) => dispatch(moveImg(index, x, y)),
    }
}

export default connect(null, mapDispatchToProps)(Img);