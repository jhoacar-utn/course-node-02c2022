import { Button } from '@mui/material';

export default function ShowToDoButton({ toDoId }) {
  return (
    <Button href={`/todos/${toDoId}`}>Show ToDo</Button>
  );
}
