import Head from 'next/head';
import Image from 'next/image';
import { CodeBlock, dracula } from 'react-code-blocks';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ContraBadge</title>

                <meta name="title" property="og:title" content="ContraBadge" />
                <meta
                    name="description"
                    property="og:description"
                    content="Get a MD badge for your Contra Profile"
                />
                <meta
                    name="image"
                    property="og:image"
                    content="https://contra-badge.s3.amazonaws.com/ContraBadge.png"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.nav}>
                <a
                    className={styles.github}
                    href="https://github.com/AlgorithmEnigma/ContraBadge"
                >
                    <svg
                        width="48px"
                        height="48px"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#f9f9f9"
                    >
                        <path
                            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                            stroke="#f9f9f9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.18 2.18 0 00-.5-.781c2.093-.227 4.293-1 4.293-4.544 0-.906-.358-1.778-1-2.434a3.211 3.211 0 00-.06-2.448s-.787-.227-2.607.961a9.152 9.152 0 00-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.211 3.211 0 007 8.464a3.482 3.482 0 00-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.18 2.18 0 00-.496.773 2.134 2.134 0 00-.13.902V19M9.667 17.702c-2 .631-3.667 0-4.667-1.948"
                            stroke="#f9f9f9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </a>
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <em>Contra</em>Badge!
                </h1>
                <h2>
                    Get a badge like this one to embed anywhere on your website.
                </h2>
                <a
                    href="https://contra.com/jordan_lowell"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className={styles.badge}
                        src="/contrabadge.svg"
                        alt="Hire me on Contra"
                        width={400}
                        height={100}
                    />
                </a>

                <h1>Usage</h1>

                <div className={styles.copyblock}>
                    <CodeBlock
                        text={
                            '[![Hire on Contra](https://me7674.npkn.net/contra-badge/)](https://contra.com/jordan_lowell)'
                        }
                        language={'markdown'}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines
                    />
                    <button
                        className={styles.copybutton}
                        onClick={() => {
                            console.log('clicked');
                            navigator.clipboard.writeText(
                                '[![Hire on Contra](https://me7674.npkn.net/contra-badge/)](https://contra.com/jordan_lowell)'
                            );
                        }}
                    >
                        <svg
                            width="24px"
                            height="24px"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#ffffff"
                        >
                            <path
                                d="M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
