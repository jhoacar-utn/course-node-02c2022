import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';

export default function PaginationListToDo({ limitListToDos, totalListToDos, reloadListToDo }) {
  const [actualPage, setActualPage] = useState(1);

  const countPages = Math.ceil(totalListToDos / limitListToDos);

  useEffect(() => {
    const start = (actualPage - 1) * limitListToDos;
    const limit = limitListToDos;
    console.log({ start, limit });
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
