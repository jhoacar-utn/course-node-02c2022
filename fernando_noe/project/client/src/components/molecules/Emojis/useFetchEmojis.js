/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

import { getEmojis } from '../../../services/emojis';

function useFetchEmojis() {
  const [listEmojis, setListEmojis] = useState(null);

  useEffect(() => {
    getEmojis().then((data) => {
      console.log(data);
      setListEmojis(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return [listEmojis === null];
}

export default useFetchEmojis;
