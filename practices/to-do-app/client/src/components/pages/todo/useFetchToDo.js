import { useState, useEffect } from 'react';

import { getToDo } from '../../../services/toDos';

/**
 * This function returns an array with
 * the variable if its loading
 * as first position and returns a To Do
 * as second position
 * @param {string} toDoId
 * @return {[loading: boolean, listToDos: array]}
 */
function useFetchToDo(toDoId) {
  const [toDo, setToDo] = useState(null);
  const [error, setError] = useState(false);

  const isLoading = toDo === null;

  useEffect(() => {
    getToDo(toDoId).then((data) => {
      setToDo(data);
    }).catch(() => {
      setError(true);
    });
  }, []);

  return [isLoading, toDo, error];
}

export default useFetchToDo;
