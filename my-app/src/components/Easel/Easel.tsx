import style from './Easel.module.css';
import Canvas from "../Canvas/Canvas";

const Easel = () => {
    return (
        <div className={style.easel}>
            <Canvas />
        </div>
    )
}

export default Easel;