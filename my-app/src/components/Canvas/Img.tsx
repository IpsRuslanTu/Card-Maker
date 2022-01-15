import React, { useRef, useState } from 'react'
import { useDragAndDrop } from '../../customHooks/useDragAndDrop';

const Img = (props: any) => {

    const imgBlock = useRef<HTMLImageElement>(null);

    const [pos, setPos] = useState({x: props.posX, y: props.posY});

    useDragAndDrop(imgBlock, pos, setPos);
    
    return (
        <img 
            ref={imgBlock}
            onDragStart={(e) => e.preventDefault()}
            // onClick={() => console.log('hey')}
            key={props.index}
            alt=""
            src={props.src}  
            style={{
                position: "absolute",
                display: "block",
                left: pos.x,
                top: pos.y
            }}
        />
    )
}

export default Img