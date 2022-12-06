import { useState, useEffect } from 'react';

import { getEmojis } from '../../../services/emojis';

/**
 * This function returns an array with
 * - loading
 * - list of emojis
 * - total of emojis
 * - reloadEmojisList as callback
 * - error
 * @param {Number} startDefault
 * @param {Number} limitDefault
 * @return {{
 * loading: boolean,
 * emojisList: array,
 * totalEmojisList: Number,
 * reloadEmojisList: Function,
 * error: Error
 * }}
 */
function useFetchEmojis(startDefault, limitDefault) {
  const [emojisList, setEmojisList] = useState(null);
  const [totalEmojisList, setTotalEmojisList] = useState(0);
  const [error, setError] = useState(false);

  const [start, setStart] = useState(startDefault || 0);
  const [limit, setLimit] = useState(limitDefault || 10);

  const [reloadEffect, setReloadEffect] = useState(0);

  /**
   * This function reloads the list of Emojis
   * with a new value for the 'start' and for the 'limit'
   * @param {Number} start
   * @param {Number} limit
   */
  const reloadEmojisList = (start, limit) => {
    if (!Number.isNaN(Number.parseInt(start, 10))) {
      setStart(start);
    }
    if (!Number.isNaN(Number.parseInt(limit, 10))) {
      setLimit(limit);
    }
    setReloadEffect(reloadEffect + 1);
  };

  useEffect(() => {
    getEmojis(start, limit)
      .then((data) => {
        setEmojisList(data.result);
        setTotalEmojisList(data.total);
      })
      .catch((error) => {
        console.log('Error de peticion', error);
        setError(true);
      });
  }, [reloadEffect]);

  return {
    loading: emojisList === null,
    emojisList,
    totalEmojisList,
    reloadEmojisList,
    error,
  };
}

export default useFetchEmojis;
