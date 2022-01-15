import { connect } from "react-redux";
import { changeText } from "../../store/textReducer";
import { TextType } from "../../store/types";

interface TextComponentProps {
    index: number;
    text: TextType;
}

const TextComponent = (props: TextComponentProps & DispatchProps) => {
    
    return (
        <input 
            onChange={(e) => props.changeText(e.target.value, props.index)}
            type="text" 
            defaultValue={props.text.text}
            style={{
                background: 'none',
                border: 'none',
                position: 'absolute',
                display: 'inline-block',
                fontSize: props.text.fontSize + 'px',
                fontFamily: props.text.fontFamily,
                fontWeight: Number(props.text.fontWeight),
                color: props.text.fontColor,
                top: props.text.y,
                left: props.text.x,
            }} 
        />
    )
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeText: (newString: string, id: number) => dispatch(changeText(newString, id)),
    }
}

export default connect(null, mapDispatchToProps)(TextComponent);