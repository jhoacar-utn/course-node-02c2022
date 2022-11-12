/* eslint-disable react/no-array-index-key */
import {
  Card, CardActions, CardContent, List, ListItem, Typography,
} from '@mui/material';
import { useState } from 'react';
import IncrementPriorityButton from '../../atoms/IncrementPriorityButton';
import ShowToDoButton from '../../atoms/ShowToDoButton';
import Spinner from '../../atoms/Spinner';
import ToDo from '../../atoms/ToDo';
import useFetchToDos from './useFetchToDos';

function ToDos() {
  const [changePriority, setChangePriority] = useState(0);
  const [loading, listToDos, error] = useFetchToDos(changePriority);

  if (loading && !error) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return (
      <Typography>An error has ocurred on the server</Typography>
    );
  }

  return (
    <List sx={{
      width: '100%',
    }}
    >
      {listToDos?.map((todo, index) => (
        <ListItem key={index}>
          <Card sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
          >
            <CardContent>
              <ToDo title={todo.title} text={todo.text} priority={todo.priority} />
            </CardContent>
            <CardActions>
              <ShowToDoButton toDoId={todo._id} />
              <IncrementPriorityButton
                toDoId={todo._id}
                onChangePriority={() => { setChangePriority(changePriority + 1); }}
              />
            </CardActions>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}

export default ToDos;
