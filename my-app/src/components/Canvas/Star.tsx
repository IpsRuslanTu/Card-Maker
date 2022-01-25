import { useRef, useState } from "react"
import { connect } from "react-redux"
import { positionType, useDragAndDrop } from "../../customHooks/useDragAndDrop"
import { deleteSvg, moveSvg } from "../../store/figuresReducer"

type PropsType = {
    posX: number,
    posY: number,
    index: number
}

const Star = (props: PropsType & DispatchProps) => {

    const [borderStyle, setBorderStyle] = useState("none");
    const changeStyle = () => {
        setBorderStyle("1px dashed black");
    };

    const setKeyDown = (e: React.KeyboardEvent<Element>) => {
        switch (e.code) {
            case "Delete":
                return props.deleteSvg(props.index);
            case 'Escape':
                return setBorderStyle('none');
        }
    };

    const svgBlock = useRef(null);
    const pos: positionType = { x: props.posX, y: props.posY };

    useDragAndDrop(svgBlock, pos, props.moveSvg, props.index);

    return <svg
        onClick={changeStyle}
        onKeyDown={(e: React.KeyboardEvent) => setKeyDown(e)}
        tabIndex={0}
        ref={svgBlock}
        onDragStart={(e) => e.preventDefault()}
        width='100px'
        height='100px'
        version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 53.867 53.867"
        style={{
            background: 'new 0 0 53.867 53.867',
            position: "absolute",
            top: pos.y, left: pos.x,
            border: borderStyle
        }}
        xmlSpace="preserve"
    >
        <polygon style={{ fill: '#EFCE4A' }} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 
            43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
        </g><g></g><g></g><g></g>
    </svg>
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        moveSvg: (index: number, x: number, y: number) => dispatch(moveSvg(index, x, y)),
        deleteSvg: (index: number) => dispatch(deleteSvg(index)),
    }
}

export default connect(null, mapDispatchToProps)(Star);