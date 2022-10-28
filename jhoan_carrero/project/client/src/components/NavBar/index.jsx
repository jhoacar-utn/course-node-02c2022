import styles from './index.module.css';

function NavBar() {
  return (
    <header className={styles.header}>
      <p className={styles.emoji}>🗳</p>
      <h1>EMOJI VOTE</h1>
    </header>
  );
}

export default NavBar;
