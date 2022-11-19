import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';

export default function PaginationListToDo({
  // eslint-disable-next-line no-unused-vars
  startListToDos,
  limitListToDos,
  totalListToDos,
  reloadListToDo,
}) {
  const countPages = Math.ceil(totalListToDos / limitListToDos);
  const initialPage = 1;

  const [actualPage, setActualPage] = useState(initialPage);

  useEffect(() => {
    const start = (actualPage - 1) * limitListToDos;
    const limit = limitListToDos;
    reloadListToDo(start, limit);
  }, [actualPage]);

  const handlePagination = (event, newPage) => {
    setActualPage(newPage);
  };

  return (
    <Pagination
      count={countPages}
      page={actualPage}
      onChange={handlePagination}
    />
  );
}
