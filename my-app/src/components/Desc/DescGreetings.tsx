import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescGreetings = () => {

    const visibleDescGreeting = useSelector((state: RootState) => state.buttonsReducer.visibleDescGreetings);

    return (
        <div style={ visibleDescGreeting ? {display: "block"} : {display: "none"} }>
            <p className={styles.greeting}>Create a postcard for your dears people <span>&#10084;</span></p>
        </div>
    )
}

export default DescGreetings