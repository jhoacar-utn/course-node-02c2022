/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { CardActions, CardContent } from '@mui/material';
import Emoji from '../../atoms/Emoji';
import Spinner from '../../atoms/Spinner';

function Emojis() {
  const [loading, listEmojis] = useFetchEmojis();

  if (loading) {
    return (
      <Spinner />
    );
  }
  return (
    <div>
      Lista de Emojis
      <List>
        {listEmojis?.map((emoji) => {
          <ListItem>
            <Card>
              <CardContent>
                <Emoji id={emoji._id} emoji={emoji.emoji} name={emoji.name} votes={emoji.votes} />
              </CardContent>
              <CardActions>
                <a href={`/emojis/${emojis._id}`} />
                <Button>Vote</Button>
              </CardActions>
            </Card>
          </ListItem>;
        })}
      </List>
    </div>
  );
}

export default Emojis;
