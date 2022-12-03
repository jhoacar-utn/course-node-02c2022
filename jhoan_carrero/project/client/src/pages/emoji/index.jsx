import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Layout from '../../layouts';
import Emoji from '../../components/Emoji';
import { getEmoji } from '../../services/emoji';

import styles from './index.module.css';

function EmojiPage() {
  const { id } = useParams();

  const [emoji, setEmoji] = useState(null);

  useEffect(() => {
    getEmoji(id)
      .then((result) => {
        setEmoji(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);

  return (
    <Layout>
      {emoji === null && (
        <p>
          Loading
        </p>
      )}
      {emoji !== null && (
        <div className={`${styles.container}`}>
          <div className={styles.buttons}>
            <Link className={styles['back-leaderboard']} to="/emojis">Go to leaderboard</Link>
          </div>
          <div className={`${styles['emoji-card']}`}>
            <Emoji {...emoji} />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default EmojiPage;
