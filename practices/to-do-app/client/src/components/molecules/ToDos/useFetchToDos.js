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

  useEffect(() => {
    getToDos().then((data) => {
      setListToDos(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return [listToDos === null, listToDos];
}

export default useFetchToDos;
