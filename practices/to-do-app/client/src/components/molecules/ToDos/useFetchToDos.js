import { useState, useEffect } from 'react';

import { getToDos } from '../../../services/toDos';

/**
 * This function returns an array with
 * - loading
 * - list of todos
 * - total of todos
 * - reloadListToDo as callback
 * - error
 * @param {Number} startDefault
 * @param {Number} limitDefault
 * @return {{
 * loading: boolean,
 * listToDos: array,
 * totalListToDos: Number,
 * reloadListToDo: Function,
 * error: Error
 * }}
 */
function useFetchToDos(startDefault, limitDefault) {
  const [listToDos, setListToDos] = useState(null);
  const [totalListToDos, setTotalListToDos] = useState(0);
  const [error, setError] = useState(false);

  const [start, setStart] = useState(startDefault || 0);
  const [limit, setLimit] = useState(limitDefault || 5);

  const [reloadEffect, setReloadEffect] = useState(0);

  /**
   * This function reload the list of Todos
   * with a new value for the 'start' and for the 'limit'
   * @param {Number} start
   * @param {Number} limit
   */
  const reloadListToDo = (start, limit) => {
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
    getToDos(start, limit).then((data) => {
      setListToDos(data.result);
      setTotalListToDos(data.total);
    }).catch((error) => {
      console.log('Error de peticion', error);
      setError(true);
    });
  }, [reloadEffect]);

  return {
    loading: listToDos === null,
    listToDos,
    totalListToDos,
    reloadListToDo,
    error,
  };
}

export default useFetchToDos;
