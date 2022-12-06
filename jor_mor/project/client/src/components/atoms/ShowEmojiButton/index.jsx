import { Link } from 'react-router-dom';

export default function ShowEmojiButton({ id }) {
  return <Link to={`/emojis/${id}`}>show</Link>;
}
