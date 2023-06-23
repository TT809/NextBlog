import Head from 'next/head';
import Link from 'next/link';
import Layout from "../components/layout";
import styles from '../styles/blog1.module.css';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <div className={styles.NavBar}>
                <div className={styles.NavBarElements}><a href="/">Home</a></div>
                <div className={styles.NavBarElements}><a href="/posts/first-post">Blogs</a></div>

            </div>
            <div className={styles.Container}>
                <div className={styles.background}>
                    <div className={styles.title}>
                        <p>Websiteentwicklung als Einstieg in die Programmierung</p>
                    </div>
                </div>
                <div className={styles.Gliederung}>
                    <ol>
                        <ol>1. Einleitung</ol>
                        <ol>2. Warum Websiteentwicklung?
                        </ol>
                        <ol>3. Die Grundlagen der Websiteentwicklung
                            <ul>3.1 HTML</ul>
                            <ul>3.2 CSS</ul>
                            <ul>3.3 JavaScript</ul>
                        </ol>
                        <ol>4. Frameworks und Bibliotheken für die Websiteentwicklung
                            <ul>4.1 React</ul>
                            <ul>4.2 Angular</ul>
                            <ul>4.3 Vue.js
                            </ul>
                        </ol>
                        <ol>5. Datenbanken und Backend-Entwicklung
                        </ol>
                        <ol>6. SEO-Optimierung für Websites
                        </ol>
                        <ol>7. Mobile Responsiveness und Usability
                        </ol>
                        <ol>8. Sicherheit in der Websiteentwicklung
                        </ol>
                        <ol>9. Die Rolle von Websiteentwicklern
                        </ol>
                        <ol>10. Karrieremöglichkeiten in der Websiteentwicklung
                        </ol>
                        <ol>11. Fazit</ol>
                    </ol>

                </div>

                <div className={styles.textElement}>
                    <h2>
                        Einleitung
                    </h2>
                    <p>
                        Die Websiteentwicklung ist ein spannendes und gefragtes Gebiet in der Programmierung. In einer
                        digitalen Welt, in der Online-Präsenz für Unternehmen und Organisationen von entscheidender
                        Bedeutung ist, gewinnen qualitativ hochwertige Websites immer mehr an Bedeutung. Dieser Artikel
                        bietet einen umfassenden Überblick über die Websiteentwicklung als Einstieg in die
                        Programmierung.
                    </p>
                    <h2>1. Warum Websiteentwicklung?</h2>
                    <h2>2. Die Grundlagen der Websiteentwicklung
                    </h2>
                    <h3>2.1 HTML
                    </h3>
                    <h3>2.2 CSS
                    </h3>
                    <h3>2.3 JavaScript
                    </h3>
                    <h2>3. Frameworks und Bibliotheken für die Websiteentwicklung
                    </h2>
                    <h3>3.1 React
                    </h3>
                    <h3>3.2 Angular
                    </h3>
                    <h3>3.3 Vue.js
                    </h3>
                    <h2>4. Datenbanken und Backend-Entwicklung
                    </h2>
                    <h2>5. SEO-Optimierung für Websites
                    </h2>
                    <h2>6. Mobile Responsiveness und Usability
                    </h2>
                    <h2>7. Sicherheit in der Websiteentwicklung
                    </h2>
                    <h2>8. Die Rolle von Websiteentwicklern
                    </h2>
                    <h2>9. Karrieremöglichkeiten in der Websiteentwicklung
                    </h2>
                    <h2>10. Fazit
                    </h2>


                </div>
            </div>
        </Layout>
    );
}