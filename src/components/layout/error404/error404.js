import React from 'react';
import styles from './error404.module.css';

const Error404 = () => {
    return (
        <>
        
            <h1>Error 404 :(</h1>
            <p className={styles.zoomArea}><b>Pagina no encontrada o movida</b></p>
           <section className={styles.errorContainer}>
            <span><span>4</span></span>
            <span>0</span>
            <span><span>4</span></span>
           </section>
             <div className={styles.linkContainer}>
                <a href={"home"} className={styles.moreLink}>ir al Home</a>
             </div>
         
        </>
    );
}
 
export default Error404;