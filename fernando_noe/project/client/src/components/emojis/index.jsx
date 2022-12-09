/* eslint-disable no-undef */

import { useEffect, useState } from 'react';
import Emoji from './Emojis';

/* eslint-disable no-unused-vars */
async function getEmojis() {
  const url = 'http://localhost:4040/api/v1/emojis';

  const response = await fetch(url);
  const json = await response.json();

  return json.result;
}

function Emojis() {
  const [emojis, setEmojis] = useState(null);

  useEffect(() => {
    getEmojis().then((data) => {
      console.log(data);
      setEmojis(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  if (emojis === null) {
    return (
      <div>
        Cargando...
      </div>
    );
  }
  return (
    <div>
      Lista de Emojis
      <ul>
        {emojis?.map((emoji) => {
          <li>
            <Emoji emoji={emoji.emoji} name={emoji.name} votes={emoji.votes} />
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Emojis;
