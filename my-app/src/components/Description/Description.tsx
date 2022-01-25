import DescArtObj from '../Desc/DescArtObj';
import DescBackground from '../Desc/DescBackground';
import DescGreetings from '../Desc/DescGreetings';
import DescInsertPic from '../Desc/DescImg';
import DescNewCanvas from '../Desc/DescNewCanvas';
import DescSave from '../Desc/DescSave';
import DescTemplates from '../Desc/DescTemplates';
import DescText from '../Desc/DescText';
import style from './Description.module.css';

const Description = () => {
    return (
        <div id="desc" className={style.description}>
            <DescGreetings />
            <DescText />
            <DescArtObj />
            <DescBackground />
            <DescInsertPic />
            <DescSave />
            <DescNewCanvas />
            <DescTemplates />
        </div>
    )
}

export default Description;