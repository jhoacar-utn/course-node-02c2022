/* eslint-disable react/no-array-index-key */
import {
  Box,
  Card, CardActions, CardContent, List, ListItem, Typography,
} from '@mui/material';
import IncrementPriorityButton from '../../atoms/IncrementPriorityButton';
import PaginationListToDo from '../../atoms/PaginationListToDo';
import ShowToDoButton from '../../atoms/ShowToDoButton';
import Spinner from '../../atoms/Spinner';
import ToDo from '../../atoms/ToDo';
import useFetchToDos from './useFetchToDos';

const LIMIT_TODOS = 5;

function ToDos() {
  const {
    loading,
    listToDos,
    totalListToDos,
    reloadListToDo,
    error,
  } = useFetchToDos();

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
    <>
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
                  onChangePriority={reloadListToDo}
                />
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
      >
        <PaginationListToDo
          limitListToDos={LIMIT_TODOS}
          totalListToDos={totalListToDos}
          reloadListToDo={reloadListToDo}
        />
      </Box>
    </>
  );
}

export default ToDos;
