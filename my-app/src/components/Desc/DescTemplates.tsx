import { connect, useSelector } from 'react-redux';
import { createDefaultBG, newBackgroundToReducer } from '../../store/backgroundReducer';
import { clearSvg, pushNewSVGArrToReducer } from '../../store/figuresReducer';
import { clearImages, pushNewImagesArrToReducer } from '../../store/imgReducer';
import { RootState } from '../../store/store';
import { clearTexts, pushNewTextArrToReducer } from '../../store/textReducer';
import { FigureType } from '../../store/types';
import { happyNewYear } from '../../templates/happyNewYear';
import { iLoveU } from '../../templates/iLoveU';
import styles from './Desc.module.css';

const DescTemplates = (props: DispatchProps) => {

    const visibleDescTemplates = useSelector((state: RootState) => state.buttonsReducer.visibleDescTemplates);

    const ClearCanvas = (): boolean => {
        if (window.confirm('Clear Canvas? All your data will be lost')) {
            props.createDefaultBG();
            props.clearImages();
            props.clearTexts();
            props.clearSvg();
            return true;
        };
        return false;
    }

    function openTemplateCard(template: any) {
        const parsedTemplate = JSON.parse(template);
        if (ClearCanvas()) {
            props.pushNewSVGArrToReducer(parsedTemplate.figures.arr);
            props.pushNewTextArrToReducer(parsedTemplate.texts);
            props.pushNewImagesArrToReducer(parsedTemplate.images.arr);
            props.newBackgroundToReducer(parsedTemplate.background);
        }
    }

    return (
        <div className={styles.desc} style={visibleDescTemplates ? { display: "block" } : { display: "none" }}>
            <p className={styles.title}>Choose template:</p>
            <button className={styles.button} onClick={() => openTemplateCard(iLoveU)}>I love you</button>
            <button className={styles.button} onClick={() => openTemplateCard(happyNewYear)}>Happy New Year</button>
            <button className={styles.button} >Happy Birthday</button>
            <button className={styles.button} >9 May</button>
        </div>)
};

type DispatchProps = ReturnType<typeof mapDispatchToProps>

const mapDispatchToProps = (dispatch: Function) => {
    return {
        createDefaultBG: () => dispatch(createDefaultBG()),
        clearImages: () => dispatch(clearImages()),
        clearTexts: () => dispatch(clearTexts()),
        clearSvg: () => dispatch(clearSvg()),
        pushNewSVGArrToReducer: (arrSvg: FigureType[]) => dispatch(pushNewSVGArrToReducer(arrSvg)),
        pushNewTextArrToReducer: (arrText: any) => dispatch(pushNewTextArrToReducer(arrText)),
        pushNewImagesArrToReducer: (arrImages: any) => dispatch(pushNewImagesArrToReducer(arrImages)),
        newBackgroundToReducer: (newBG: any) => dispatch(newBackgroundToReducer(newBG))
    }
}

export default connect(null, mapDispatchToProps)(DescTemplates);