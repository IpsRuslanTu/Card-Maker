import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Desc.module.css'

const DescGreetings = () => {

    const visibleDescGreeting = useSelector((state: RootState) => state.buttonsDesc.visibleDescGreetings);

    return (
        <div style={ (visibleDescGreeting === 1) ? {display: "block"} : {display: "none"} }>
            <p className={styles.greeting}>Create a postcard for your dears people <span>&#10084;</span></p>
        </div>
    )
}

export default DescGreetings
