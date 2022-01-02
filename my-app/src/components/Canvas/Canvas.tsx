import { useSelector } from 'react-redux';
import style from './Canvas.module.css';
import { RootState } from '../../store/store';

const Canvas = () => {

    const bgColor: string = useSelector((state: RootState) => state.stateBackground.bgColor)

    return (
        <div className={style.canvas} style={{background: bgColor}}></div>
    )
}

export default Canvas;