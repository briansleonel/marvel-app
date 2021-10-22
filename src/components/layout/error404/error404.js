import React from "react";
import { Link } from "react-router-dom";
import styles from "./error404.module.css";

const Error404 = () => {
  return (
    <>
      <section className={styles.errorContainer}>
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
      </section>

      <p className={styles.zoomArea}>
        Página no encontrada o movida
      </p>

      <div className={styles.containerButtonBackToHome}>
        <Link className={styles.buttonBackToHome} to="/home">
          Ir al Home
        </Link>
      </div>
    </>
  );
};

export default Error404;
