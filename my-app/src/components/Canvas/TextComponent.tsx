import { useRef } from "react";
import { connect } from "react-redux";
import { positionType, useDragAndDrop } from "../../customHooks/useDragAndDrop";
import { changeText, moveText } from "../../store/textReducer";
import { TextType } from "../../store/types";

interface TextComponentProps {
    posX: number,
    posY: number,
    index: number;
    text: TextType;
}

const TextComponent = (props: TextComponentProps & DispatchProps) => {

    const imgBlock = useRef<HTMLImageElement>(null);

    const pos: positionType = {x: props.posX, y: props.posY};

    useDragAndDrop(imgBlock, pos, props.moveText, props.index);

    return (
        <div 
            ref={imgBlock}
            style={{
            position: 'absolute',
            display: 'inline-block',
            top: props.text.y,
            left: props.text.x,
        }}>
            <input
                onChange={(e) => props.changeText(e.target.value, props.index)}
                type="text"
                defaultValue={props.text.text}
                style={{
                    background: 'none',
                    border: 'none',
                    fontSize: props.text.fontSize + 'px',
                    fontFamily: props.text.fontFamily,
                    fontWeight: Number(props.text.fontWeight),
                    color: props.text.fontColor,
                }}
            />
        </div>
    )
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeText: (newString: string, id: number) => dispatch(changeText(newString, id)),
        moveText: (index: number, x: number, y: number) => dispatch(moveText(index, x, y)),
    }
}

export default connect(null, mapDispatchToProps)(TextComponent);