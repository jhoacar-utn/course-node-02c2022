/* eslint-disable react/no-array-index-key */
import {
  Box, Card, CardActions, CardContent, Typography,
} from '@mui/material';
import { Grid } from '@material-ui/core';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import IncrementVotesButton from '../../atoms/IncrementVotesButton';
import PaginationListEmoji from '../../atoms/PaginationListEmoji';
import ShowEmojiButton from '../../atoms/ShowEmojiButton';
import Spinner from '../../atoms/Spinner';
import Emoji from '../../atoms/Emoji';
import useFetchEmojis from './useFetchEmojis';

function Emojis() {
  const [searchParams] = useSearchParams();

  const start = searchParams.get('start') || 0;
  const limit = searchParams.get('limit') || 10;

  const {
    loading, listEmojis, totalListEmojis, reloadListEmoji, error,
  } = useFetchEmojis(start, limit);

  if (loading && !error) {
    return <Spinner />;
  }
  if (error) {
    toast.error('An error has ocurred on the server');
    return <Typography>Error on the request</Typography>;
  }

  return (
    <>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {listEmojis?.map((emoji, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={3}>
            <Card
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Emoji
                  title={emoji.name}
                  text={emoji.emoji}
                  votes={emoji.votes}
                />
              </CardContent>
              <CardActions>
                <ShowEmojiButton id={emoji._id} />
                <IncrementVotesButton
                  id={emoji._id}
                  onChangeVotes={reloadListEmoji}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {totalListEmojis > 0 && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <PaginationListEmoji
            startListEmojis={start}
            limitListEmojis={limit}
            totalListEmojis={totalListEmojis}
            reloadListEmoji={reloadListEmoji}
          />
        </Box>
      )}
    </>
  );
}

export default Emojis;
