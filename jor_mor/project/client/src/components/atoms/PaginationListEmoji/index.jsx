import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';

export default function PaginationListEmoji({
  // eslint-disable-next-line no-unused-vars
  startListEmojis,
  limitListEmojis,
  totalListEmojis,
  reloadListEmoji,
}) {
  const initialPage = 1;
  const countPages = Math.ceil(totalListEmojis / limitListEmojis);

  const [actualPage, setActualPage] = useState(initialPage);

  useEffect(() => {
    const start = startListEmojis || (actualPage - 1) * limitListEmojis;
    const limit = limitListEmojis;
    reloadListEmoji(start, limit);
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
