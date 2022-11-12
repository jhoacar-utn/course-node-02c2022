import { Button } from '@mui/material';
import useFetchPriority from './useFetchPriority';

export default function IncrementPriorityButton({ toDoId }) {
  const handleIncrementPriority = () => {
    const [loading, priority, error] = useFetchPriority(toDoId);
    if (loading && !error) {
      console.log('Loading');
    } else if (error) {
      console.log('Un error ha ocurrido');
    } else {
      console.log('Prioridad hecha: ', priority);
    }
  };
  return (
    <Button onClick={handleIncrementPriority} color="success">Increment Priority</Button>
  );
}
