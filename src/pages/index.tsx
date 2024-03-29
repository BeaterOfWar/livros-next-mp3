import React from 'react';
import Head from 'next/head';
import { Menu } from '../../componentes/Menu';
import styles from '../styles/Home.module.css';

export default function Home(): React.JSX.Element {
    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Loja Next
                </h1>
            </main>
        </div>
    );
}
