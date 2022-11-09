import { useState, useEffect } from 'react';

import { getToDo } from '../../../services/toDos';

/**
 * This function returns an array with
 * the variable if its loading
 * as first position and returns a To Do
 * as second position
 * @return {[loading: boolean, listToDos: array]}
 */
function useFetchToDo(id) {
  const [toDo, setToDo] = useState(null);

  useEffect(() => {
    getToDo(id).then((data) => {
      setToDo(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return [toDo === null, toDo];
}

export default useFetchToDo;
