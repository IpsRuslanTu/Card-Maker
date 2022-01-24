import React, { LegacyRef, useRef } from 'react';
import { connect } from 'react-redux';
import { positionType, useDragAndDrop } from '../../customHooks/useDragAndDrop';
import { moveSvg } from '../../store/figuresReducer';

type PropsType = {
  posX: number,
  posY: number,
  index: number

}

const Circle = (props: PropsType & DispatchProps) => {

  const svgBlock = useRef(null);
  const pos: positionType = {x: props.posX, y: props.posY};

  useDragAndDrop(svgBlock, pos, props.moveSvg, props.index);
  
  return <svg 
            ref={svgBlock}
            onDragStart={(e) => e.preventDefault()}
            width='100px'
            version="1.1" id="Capa_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="0px" y="0px"
            viewBox="0 0 16 16" 
            style={{background: 'new 0 0 16 16', position: "absolute", top: pos.y, left: pos.x}} xmlSpace="preserve"
        >
        <g>
        <path style={{fill: '#030104'}} d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,
        0z M8,15c-3.866,0-7-3.134-7-7s3.134-7,7-7s7,3.134,7,7S11.866,15,8,15z"/>
     </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
     <g></g><g></g><g></g><g></g><g></g>
     </svg>
};

// type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
// type Props = StateProps & DispatchProps;

// function mapStateToProps(state: RootState) {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch: Function) => {
    return {
        moveSvg: (index: number, x: number, y: number) => dispatch(moveSvg(index, x, y)),
    }
}

export default connect(null, mapDispatchToProps)(Circle);
