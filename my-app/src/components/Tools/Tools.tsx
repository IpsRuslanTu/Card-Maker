import style from './Tools.module.css';
import { useDispatch } from 'react-redux';

const Tools = () => {

    const dispatch = useDispatch();

    const openDescBackground = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_BACKGROUND", payload: 1})
    }

    const openDescImg = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_INSERT_PIC", payload: 1})
    }

    const openDescText = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_TEXT", payload: 1})
    }

    const openDescArtObj = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_ARTOBJ", payload: 1})
    }

    const openDescSave = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_SAVE", payload: 1})
    }

    const buttons = [
        { id: '1', title: 'Add File', nameImg: 'add-file', onClick: () => { } },
        { id: '2', title: 'Templates', nameImg: 'templates', onClick: () => { } },
        { id: '3', title: 'Add Background', nameImg: 'add-background', onClick: openDescBackground },
        { id: '4', title: 'Add Picture', nameImg: 'add-picture', onClick: openDescImg },
        { id: '5', title: 'Add Art-object', nameImg: 'add-circle', onClick: openDescArtObj },
        { id: '6', title: 'Add Text', nameImg: 'add-text', onClick: openDescText },
        { id: '7', title: 'Save', nameImg: 'save', onClick: openDescSave },
        { id: '8', title: 'Undo', nameImg: 'undo', onClick: () => { } },
        { id: '9', title: 'Redo', nameImg: 'redo', onClick: () => { } }
    ]

    return (
        <div className={style.tools}>
            {buttons.map((key) => {
                return (
                    <button 
                        key={key.id} 
                        className={style.button}
                        title={key.title}
                        onClick={key.onClick}
                    >
                        <input 
                            type="image" 
                            alt="icon"
                            className={style.button__image} 
                            src={`./img/${key.nameImg}.png`} 
                        />
                    </button>
                )
            })}
        </div>
    )
}

export default Tools;