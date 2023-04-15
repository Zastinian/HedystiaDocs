import React from "react";
import Link from "@docusaurus/Link";
import styles from "./style.module.css";
import clsx from "clsx";

export default function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        <div className={styles["text-info"]}>
          <h2 className="text-h2">Hedystia</h2>
          <p className="big-regular-text">Documentation of Hedystia packages, applications and others</p>
          <center>
            <div className={clsx(styles.button)}>
              <Link to="/docs/welcome">
                <button>Start</button>
              </Link>
            </div>
          </center>
        </div>
      </div>
    </header>
  );
}
