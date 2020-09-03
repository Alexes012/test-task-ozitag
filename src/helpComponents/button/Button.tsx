import React from 'react';
import styles from './Button.module.css'

function Button(props: any) {

    return (
        <>
            <button
                className={styles.button}
                onClick={props.onClick}
                onChange={props.onChange}
                value={props.value}
                disabled={props.disabled}
            >
                {props.description}
            </button>
        </>
    );
}

export default Button;