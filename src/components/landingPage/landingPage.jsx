import marvel from '../../assets/img/marvel.png';

import { Link } from 'react-router-dom'

import styles from './landingPage.module.css'

const LandingPage = () => {

    return(
        <section className={styles.containerLandingPage}>
            <div className={styles.containerImg} >
                <img className={styles.img} src={marvel} alt="Logo de Marvel" />
            </div>
            <div className={styles.containerButton} >
                <Link className={styles.btn} to="/home" >Home</Link>
                <Link className={styles.btn} to="/about" >About</Link>
            </div>
        </section>
    )
}

export default LandingPage;