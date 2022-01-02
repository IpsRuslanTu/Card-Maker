import DescArtObj from '../Desc/DescArtObj';
import DescBackground from '../Desc/DescBackground';
import DescGreetings from '../Desc/DescGreetings';
import DescInsertPic from '../Desc/DescInsertPic';
import DescSave from '../Desc/DescSave';
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
        </div>
    )
}

export default Description;