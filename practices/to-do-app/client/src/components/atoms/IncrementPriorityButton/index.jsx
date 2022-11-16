import { Button } from '@mui/material';
import { incrementPriority } from '../../../services/toDos';

export default function IncrementPriorityButton({ toDoId, onChangePriority }) {
  const handleIncrementPriority = () => {
    incrementPriority(toDoId).then(() => {
      // console.log(data);
      onChangePriority();
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <Button onClick={handleIncrementPriority} color="success">Increment Priority</Button>
  );
}
