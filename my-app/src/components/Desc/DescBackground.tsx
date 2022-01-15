import { useEffect, useRef, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { addImgBG, changeBackground, changeHeigthCanvas, 
    changeWidthCanvas } from '../../store/backgroundReducer';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescBackground = (props: Props) => {

    const visibleDescBackground = useSelector((state: RootState) => state.buttonsReducer.visibleDescBackground);

    const inputRef = useRef<HTMLInputElement>(null);
    const selectedImageUrlRef = useRef<string>();
    const [loading, setLoading] = useState(false);

    function revokeImageUrl () {
        if (selectedImageUrlRef.current != null) {
            window.URL.revokeObjectURL(selectedImageUrlRef.current)
        }
    }

    function openSelectImageModal() {
        if (inputRef.current) {
            setLoading(true);
            inputRef.current.click()
        }
    }

    function updateSelectedImage() {
        revokeImageUrl();
        if (inputRef.current && inputRef.current.files) {
            const image = inputRef.current.files[0];
            if (image) {
                selectedImageUrlRef.current = window.URL.createObjectURL(image);

                let imageWWW = new Image();
                imageWWW.src = selectedImageUrlRef.current;
                imageWWW.onload = function() {
                    props.changeWidthCanvas(imageWWW.width);
                    props.changeHeigthCanvas(imageWWW.height);
                }

                props.addImgBG(selectedImageUrlRef.current);
            }
            setLoading(true);
        }
        setLoading(false)
    }

    useEffect(() => revokeImageUrl, [])

    return (
        <div 
            className={styles.desc} 
            style={ visibleDescBackground ? {display: "block"} : {display: "none"} }
        >
            <button 
                className={styles.button} 
                onClick={openSelectImageModal} 
                disabled={loading}
            >
                from PC
            </button>
            
            <input
                ref={inputRef}
                accept=".jpg,.png"
                type="file"
                multiple={false}
                onChange={updateSelectedImage}
                style={{display: 'none'}}
            />

            <hr/>
            <br/>
            <p className={styles.title}>Background</p>
            <p className={styles.label}>Color background:</p>
            <input 
                className={styles.inputColor}
                onChange={(e) => props.changeBackground(e.target.value)}
                type="color" 
            />

            <p className={styles.title}>Size canvas</p>
            <p className={styles.label}>Width:</p>
            <input 
                className={styles.input} 
                type="number" 
                value={props.width} 
                onChange={(e) => props.changeWidthCanvas(Number(e.target.value))} 
            />
            <p className={styles.label}>Height:</p>
            <input 
                className={styles.input} 
                type="number" 
                value={props.height} 
                onChange={(e) => props.changeHeigthCanvas(Number(e.target.value))} 
            />
        </div>
    )
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps & DispatchProps;

function mapStateToProps(state: RootState) {
    return {
        bgColor: state.backgroundReducer.bgColor,
        width: state.backgroundReducer.width,
        height: state.backgroundReducer.height
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeBackground: (newColor: string) => dispatch(changeBackground(newColor)),
        changeWidthCanvas: (newWidth: number) => dispatch(changeWidthCanvas(newWidth)),
        changeHeigthCanvas: (newHeight: number) => dispatch(changeHeigthCanvas(newHeight)),
        addImgBG: (newSrc: string) => dispatch(addImgBG(newSrc)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DescBackground);