/* eslint-disable react/no-array-index-key */
import {
  Box,
  Card, CardActions, CardContent, List, ListItem, Typography,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import IncrementPriorityButton from '../../atoms/IncrementPriorityButton';
import PaginationListToDo from '../../atoms/PaginationListToDo';
import ShowToDoButton from '../../atoms/ShowToDoButton';
import Spinner from '../../atoms/Spinner';
import ToDo from '../../atoms/ToDo';
import useFetchToDos from './useFetchToDos';

function ToDos() {
  const [searchParams] = useSearchParams();

  const start = searchParams.get('start') || 0;
  const limit = searchParams.get('limit') || 5;

  const {
    loading,
    listToDos,
    totalListToDos,
    reloadListToDo,
    error,
  } = useFetchToDos(start, limit);

  if (loading && !error) {
    return (
      <Spinner />
    );
  }
  if (error) {
    toast.error('An error has ocurred on the server');
    return (
      <Typography>
        Error on the request
      </Typography>
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
      {
        totalListToDos > 0
        && (
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
            startListToDos={start}
            limitListToDos={limit}
            totalListToDos={totalListToDos}
            reloadListToDo={reloadListToDo}
          />
        </Box>
        )
      }

    </>
  );
}

export default ToDos;
