import styles from './index.module.css';

function Spinner() {
  return (
    <div className={`${styles['fallback-spinner']}`}>
      <div className={`${styles.loading}`} />
    </div>
  );
}

export default Spinner;
