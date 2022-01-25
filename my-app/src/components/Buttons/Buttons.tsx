import style from './Buttons.module.css';
import { useDispatch } from 'react-redux';

const Buttons = () => {

    const dispatch = useDispatch();

    const openDescBackground = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_BACKGROUND", payload: true})
    }

    const openDescImg = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_INSERT_PIC", payload: true})
    }

    const openDescText = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_TEXT", payload: true})
    }

    const openDescArtObj = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_ARTOBJ", payload: true})
    }

    const openDescSave = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_SAVE", payload: true})
    }

    const openDescNew = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_NEW", payload: true})
    }

    const openTemplates = () => {
        dispatch({type: "CLEAR_DESC"});
        dispatch({type: "RENDER_DESC_TEMPLATES", payload: true})
    }

    const buttons = [
        { id: '1', title: 'Add File', nameImg: 'add-file', onClick: openDescNew },
        { id: '2', title: 'Templates', nameImg: 'templates', onClick: openTemplates },
        { id: '3', title: 'Add Background', nameImg: 'add-background', onClick: openDescBackground },
        { id: '4', title: 'Add Picture', nameImg: 'add-picture', onClick: openDescImg },
        { id: '5', title: 'Add Art-object', nameImg: 'add-artobj', onClick: openDescArtObj },
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

export default Buttons;