import { Pagination } from '@mui/material';
import { useState } from 'react';

export default function PaginationListToDo({ limitListToDos, totalListToDos, reloadListToDo }) {
  const [actualPage, setActualPage] = useState(1);

  const start = (actualPage - 1) * limitListToDos;
  const limit = limitListToDos;

  const countPages = Math.ceil(totalListToDos / limitListToDos);

  const handlePagination = (event, newPage) => {
    setActualPage(newPage);
    reloadListToDo(start, limit);
  };

  return (
    <Pagination
      count={countPages}
      page={actualPage}
      onChange={handlePagination}
    />
  );
}
