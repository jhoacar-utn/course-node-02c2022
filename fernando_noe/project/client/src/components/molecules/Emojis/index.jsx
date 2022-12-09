/* eslint-disable react/no-array-index-key */
import {
  Box,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import VoteEmojiButton from '../../atoms/VoteButton';
import PaginationEmojiList from '../../atoms/PaginationEmojiList';
import ShowEmojiButton from '../../atoms/ShowEmojiButton';
import Spinner from '../../atoms/Spinner';
import Emoji from '../../atoms/Emoji';
import useFetchEmojis from './useFetchEmojis';

function Emojis() {
  const [searchParams] = useSearchParams();

  const start = searchParams.get('start') || 0;
  const limit = searchParams.get('limit') || 10;

  const {
    loading, emojisList, totalEmojisList, reloadEmojisList, error,
  } = useFetchEmojis(start, limit);

  if (loading && !error) {
    return <Spinner />;
  }
  if (error) {
    toast.error('An error has ocurred on the server');
    return <Typography>Error on the request</Typography>;
  }
  console.log(emojisList);
  return (
    <>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        {emojisList?.map((emoji, index) => (
          <ListItem key={index}>
            <Card
              sx={{
                width: '15vw',
                height: '20rem',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Emoji
                  emoji={emoji.emoji}
                  name={emoji.name}
                  vote={emoji.votes}
                />
              </CardContent>
              <CardActions>
                <ShowEmojiButton emojiId={emoji._id} />
                <VoteEmojiButton
                  emojiId={emoji._id}
                  onVoteChange={reloadEmojisList}
                />
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
      {totalEmojisList > 0 && (
        <Box
          sx={{
            margin: '2rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <PaginationEmojiList
            startEmojisList={start}
            limitEmojisList={limit}
            totalEmojisList={totalEmojisList}
            reloadEmojisList={reloadEmojisList}
          />
        </Box>
      )}
    </>
  );
}

export default Emojis;
