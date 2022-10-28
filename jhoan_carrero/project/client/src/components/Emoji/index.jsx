import styles from './index.module.css';

function Emoji({ emoji, name, votes }) {
  return (
    <div className={styles.container}>
      <p className={styles.emoji}>{emoji}</p>
      <p className={styles.name}>
        <strong>{name}</strong>
      </p>
      <p className={styles.votes}>
        <span>{votes}</span>
      </p>
    </div>
  );
}

export default Emoji;
