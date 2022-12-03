import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Pagination } from '@mui/material';
import Emoji from '../../components/Emoji';
import Layout from '../../layouts';
import { getEmojis } from '../../services/emoji';
import { postVote } from '../../services/vote';
import styles from './index.module.css';

function Home() {
  const [searchParams] = useSearchParams();
  const [emojis, setEmojis] = useState(null);
  const [total, setTotal] = useState(0);
  const [votations, setVotations] = useState(0);
  const [start, setStart] = useState(searchParams.get('start') || 0);
  const LIMIT = searchParams.get('limit') || 10;

  useEffect(() => {
    getEmojis(start, LIMIT)
      .then((data) => {
        setTotal(Math.ceil(data.total / LIMIT));
        setEmojis(() => data.result);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        setEmojis([]);
      });
  }, [votations, start]);

  const handleVote = (id) => {
    postVote(id)
      .then((result) => {
        toast.success(`Voted succesfully in emoji: ${result?.name}`);
        setVotations(votations + 1);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleNextPage = (event, value) => {
    console.log(emojis.length);
    setStart((value - 1) * LIMIT);
  };

  return (
    <Layout>
      <section className={styles.section}>
        {emojis === null && (
          <div>Loading</div>
        )}
        {emojis?.length === 0 && (
          <div>
            No Emojis
          </div>
        )}
        {emojis?.length > 0 && (
          <div className={styles['emoji-container']}>
            <ul className={styles['emoji-list']}>
              {emojis.map((emoji) => emoji && (
                <li className={styles['emoji-card']} key={emoji?._id}>
                  <Emoji {...emoji} />
                  <div className={styles['emoji-buttons']}>
                    <Link className={styles['emoji-show']} to={`/emojis/${emoji._id}`}>
                      show
                    </Link>
                    <button className={styles['emoji-vote']} onClick={() => handleVote(emoji._id)} type="button">
                      vote
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles['emoji-pagination']}>
              <Pagination count={total} size="large" onChange={handleNextPage} />
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Home;
