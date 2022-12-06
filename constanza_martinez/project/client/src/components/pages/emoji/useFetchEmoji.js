import { useState, useEffect } from 'react';

import { getEmoji } from '../../../services/emojis';

/**
 * This function returns an array with
 * the variable if its loading
 * as first position and returns an emoji
 * as second position
 * @param {string} emojiId
 * @return {[loading: boolean, emojisList: array]}
 */
function useFetchEmoji(emojiId) {
  const [emoji, setEmoji] = useState(null);
  const [error, setError] = useState(false);

  const isLoading = emoji === null;

  useEffect(() => {
    getEmoji(emojiId)
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
