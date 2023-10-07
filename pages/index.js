import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import Joke from '../components/Joke';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get a Joke');

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  return (
    <>
      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Get a Joke' || btnText === 'Get a New Joke' ? (
        <Button type="button" onClick={getAJoke}>
          {btnText}
        </Button>
      ) : (
        <Button
          type="button"
          onClick={() => {
            setButton('Get a New Joke');
          }}
        >
          {btnText}
        </Button>
      )}
    </>
  );
}

export default Home;
