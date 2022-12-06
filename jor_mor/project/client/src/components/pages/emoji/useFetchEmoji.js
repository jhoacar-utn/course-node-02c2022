import { useState, useEffect } from 'react';

import { getEmoji } from '../../../services/emojis';

/**
 * This function returns an array with
 * the variable if its loading
 * as first position and returns a To Do
 * as second position
 * @param {string} id
 * @return {[loading: boolean, listEmojis: array]}
 */
function useFetchEmoji(id) {
  const [emoji, setEmoji] = useState(null);
  const [error, setError] = useState(false);

  const isLoading = emoji === null;

  useEffect(() => {
    getEmoji(id)
      .then((data) => {
        setEmoji(data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return [isLoading, emoji, error];
}

export default useFetchEmoji;
