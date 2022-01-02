import style from './Title.module.css';

const Title = () => {
    return (
        <div className={style.title}>
            <div className={`${style.title__block} ${style.title__block_style}`}>powered by IPS-21</div>
            <div className={style.title__block}>
                <div className={style.title__block_logo}><img src="./../img/logo.png" alt="" /></div>
                <div className={`${style.title__block_logo} ${style.title__block_style}`}>Card Maker</div>
            </div>
            <div className={`${style.title__block} ${style.title__block_style}`}>Purchase</div>
        </div>
    )
}

export default Title;