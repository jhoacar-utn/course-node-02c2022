import { useState, useEffect } from 'react';

import { getEmojis } from '../../../services/emojis';

/**
 * This function returns an array with
 *
 * @param {Number} startDefault
 * @param {Number} limitDefault
 * @return {{
 * loading: boolean,
 * listEmojis: array,
 * totalListEmojis: Number,
 * reloadListEmoji: Function,
 * error: Error
 * }}
 */
function useFetchEmojis(startDefault, limitDefault) {
  const [listEmojis, setListEmojis] = useState(null);
  const [totalListEmojis, setTotalListEmojis] = useState(0);
  const [error, setError] = useState(false);

  const [start, setStart] = useState(startDefault || 0);
  const [limit, setLimit] = useState(limitDefault || 10);

  const [reloadEffect, setReloadEffect] = useState(0);

  /**
   *
   *
   * @param {Number} start
   * @param {Number} limit
   */
  const reloadListEmoji = (start, limit) => {
    /**
     * Si la condicion es una variable, evaluara
     * los siguientes casos,
     * - undefined
     * - null
     * - ""
     * - []
     * - 0
     */
    if (!Number.isNaN(Number.parseInt(start, 10))) {
      setStart(start);
    }
    if (!Number.isNaN(Number.parseInt(limit, 10))) {
      setLimit(limit);
    }
    // reloadEffect++;
    /**
     *
     * - Esta actualizacion de estado se hace asincrona
     *
     *        setReloadEffect(reloadEffect + 1);
     *
     * - Esta actualizacion de estado se hace inmediata
     *
     *        setReloadEffect( ()=> reloadEffect + 1);
     */
    // Actualizacion asincrona
    // setReloadEffect(reloadEffect + 1); // 0 + 1 -> 1
    // setReloadEffect(reloadEffect + 1); // 0 + 1 -> 1

    // Actualizacion inmediata del estado
    // setReloadEffect(()=>reloadEffect + 1); // 0 + 1 -> 1
    // setReloadEffect(()=>reloadEffect + 1); // 1 + 1 -> 2
    setReloadEffect(reloadEffect + 1);
  };

  useEffect(() => {
    getEmojis(start, limit)
      .then((data) => {
        setListEmojis(data.result);
        setTotalListEmojis(data.total);
      })
      .catch((error) => {
        console.log('Error de peticion', error);
        setError(true);
      });
  }, [reloadEffect]);

  return {
    loading: listEmojis === null,
    listEmojis,
    totalListEmojis,
    reloadListEmoji,
    error,
  };
}

export default useFetchEmojis;
