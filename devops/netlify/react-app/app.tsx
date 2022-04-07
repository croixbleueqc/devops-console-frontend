import React from 'react';
import styles from './react-app.module.scss';

export function App() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p>This React app component is deployed to Netlify</p>
                <p>It represents an example of devops-console implementation</p>
            </div>
        </div>
    );
}
