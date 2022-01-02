import style from './Workspace.module.css';
import Easel from "../Easel/Easel";
import Description from "../Description/Description";
import Tools from "../Tools/Tools";

const Workspace = () => {
    return (
        <div className={style.workspace}>
            <Tools />
            <Description/>
            <Easel/>
        </div>
    )
}

export default Workspace;