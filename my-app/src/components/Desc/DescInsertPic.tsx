import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import style from './Desc.module.css'

const DescInsertPic = () => {

    const visibleDescInsertPic = useSelector((state: RootState) => state.buttonsDesc.visibleDescInsertPic);
    
    return (
        <div className={style.desc} style={ (visibleDescInsertPic === 1) ? {display: "block"} : {display: "none"}}>
            <p className={style.title}>Insert image:</p>
            <button className={style.button}>from PC</button>
            <button className={style.button}>from Pexels.com</button>
        </div>
    )
}

export default DescInsertPic
