import React from "react";
import styles from './Header.module.css'
import Link from "./Link";

const Header: React.FC = (props: any) => {

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.nameOfPages}>
                    <Link link="./login" name="Login"/>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.containerForOther}>
                    Test task for the company OziTag.
                </div>
            </div>
        </div>
    )

};

export default Header;