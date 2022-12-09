import { useState, useEffect } from 'react';
import { getEmoji } from '../../../services/emojis';

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
