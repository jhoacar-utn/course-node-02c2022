import NavBar from '../components/NavBar';
import styles from './index.module.css';

function Layout({ children }) {
  return (
    <main className={`${styles.background} ${styles.main}`}>
      <article className={styles.article}>
        <NavBar />
        {children}
      </article>
    </main>
  );
}

export default Layout;
