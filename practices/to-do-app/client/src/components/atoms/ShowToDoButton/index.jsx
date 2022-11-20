import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ShowToDoButton({ toDoId }) {
  return (
    <Link to={`/todos/${toDoId}`}>
      <Button>
        Show ToDo
      </Button>
    </Link>
  );
}
