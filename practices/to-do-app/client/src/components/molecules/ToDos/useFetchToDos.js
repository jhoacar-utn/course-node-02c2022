import { useState, useEffect } from 'react';

import { getToDos } from '../../../services/toDos';

/**
 * This function returns an array with
 * - loading as first position
 * - list of todos as second position
 * - reloadListToDo as callback in third position
 * - error in fourth position
 * @return {[
 * loading: boolean,
 * listToDos: array,
 * reloadListToDo: Function,
 * error: Error
 * ]}
 */
function useFetchToDos() {
  const [listToDos, setListToDos] = useState(null);
  const [error, setError] = useState(false);

  const [reloadEffect, setReloadEffect] = useState(0);

  const reloadListToDo = () => {
    console.log(reloadEffect);
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
    console.log(reloadEffect);
  };

  useEffect(() => {
    getToDos().then((data) => {
      setListToDos(data);
    }).catch(() => {
      setError(true);
    });
  }, [reloadEffect]);

  return [listToDos === null, listToDos, reloadListToDo, error];
}

export default useFetchToDos;
