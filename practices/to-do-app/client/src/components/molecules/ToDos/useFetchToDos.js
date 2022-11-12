import { useState, useEffect } from 'react';

import { getToDos } from '../../../services/toDos';

/**
 * This function returns an array with
 * the variable if its loading
 * as first position and returns a list of todos
 * as second position
 * @return {[loading: boolean, listToDos: array]}
 */
function useFetchToDos() {
  const [listToDos, setListToDos] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getToDos().then((data) => {
      setListToDos(data);
    }).catch(() => {
      setError(true);
    });
  }, []);

  return [listToDos === null, listToDos, error];
}

export default useFetchToDos;
