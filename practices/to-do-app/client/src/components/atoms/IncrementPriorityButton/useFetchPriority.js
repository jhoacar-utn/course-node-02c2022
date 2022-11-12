import { useEffect, useState } from 'react';
import { incrementPriority } from '../../../services/toDos';

export default function useFetchPriority(toDoId) {
  const [priority, setPriority] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    incrementPriority(toDoId).then((data) => {
      setPriority(data);
    }).catch(() => {
      setError(true);
    });
  }, []);

  return [priority === null, priority, error];
}
