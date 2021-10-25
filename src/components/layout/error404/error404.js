import React from "react";
import { Link } from "react-router-dom";
import styles from "./error404.module.css";

const Error404 = () => {
  return (
    <div className={styles.content}>
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
        Page not found
      </p>

      <div className={styles.containerButtonBackToHome}>
        <Link className={styles.buttonBackToHome} to="/home">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
