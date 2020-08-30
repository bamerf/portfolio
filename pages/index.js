import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Bamdad Erfanian Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Mukta:wght@200&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<a href="https://github.com/bamerf" target="_blank">
				<div className={styles.textContainer}>
					<p className={styles.text}>Github</p>
				</div>
			</a>
			<a href="https://www.linkedin.com/in/bamdad-erfanian/" target="_blank">
				<div className={styles.textContainer}>
					<p className={styles.text}>LinkedIn</p>
				</div>
			</a>
		</div>
	);
}
