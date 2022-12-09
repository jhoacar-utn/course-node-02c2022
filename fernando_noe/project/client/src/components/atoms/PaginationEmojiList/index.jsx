import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';

export default function PaginationEmojiList({
  // eslint-disable-next-line no-unused-vars
  startEmojisList,
  limitEmojisList,
  totalEmojisList,
  reloadEmojisList,
}) {
  const countPages = Math.ceil(totalEmojisList / limitEmojisList);
  const initialPage = 1;

  const [actualPage, setActualPage] = useState(initialPage);

  useEffect(() => {
    const start = (actualPage - 1) * limitEmojisList;
    const limit = limitEmojisList;
    reloadEmojisList(start, limit);
  }, [actualPage]);

  const handlePagination = (event, newPage) => {
    setActualPage(newPage);
  };

  return (
    <Pagination
      sx={{
        backgroundColor: 'white',
      }}
      count={countPages}
      page={actualPage}
      onChange={handlePagination}
    />
  );
}
