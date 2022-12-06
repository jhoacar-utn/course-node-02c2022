import { Link } from 'react-router-dom';

export default function ShowEmojiButton({ emojiId }) {
  return <Link to={`/emojis/${emojiId}`}>Show</Link>;
}
