import { fetchJokes, updateJoke } from '@/apis';
import { useEffect, useState } from 'react';
import Loading from '../loading/Loading';

const Joke = () => {
  const [jokes, setJokes] = useState();
  const [currentJoke, setCurrentJoke] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await fetchJokes();
      setIsLoading(false);
      setJokes(result);
      setCurrentJoke(result.shift());
    })();
  }, []);

  const handleVoteFunny = async () => {
    setIsLoading(true);
    await updateJoke({
      ...currentJoke,
      funny_votes: currentJoke.funny_votes + 1,
    });
    setIsLoading(false);
    document.cookie = `${currentJoke.id}=voted; expires=01 Apr 2025 12:00:00 UTC`;

    setCurrentJoke(jokes.shift());
  };

  const handleVoteNotFunny = async () => {
    setIsLoading(true);
    await updateJoke({
      ...currentJoke,
      not_funny_votes: currentJoke.not_funny_votes + 1,
    });
    setIsLoading(false);
    document.cookie = `${currentJoke.id}=voted; expires=01 Apr 2025 12:00:00 UTC`;

    setCurrentJoke(jokes.shift());
  };

  return (
    <div className='w-[1024px] m-auto p-8'>
      <div className='flex flex-col gap-10 items-center justify-center'>
        {isLoading ? (
          <Loading className='size-10' />
        ) : (
          <span className='px-5 text-gray-600'>
            {currentJoke?.content ||
              "That's all the jokes for today! Come back another day!"}
          </span>
        )}
        <hr className='w-[750px]' />
        <div className='flex justify-center items-center gap-6 font-[400] text-white'>
          <button
            disabled={!currentJoke}
            className='w-[230px] bg-[#2c7edb] p-2 shadow-inner'
            onClick={handleVoteFunny}
          >
            This is Funny!
          </button>
          <button
            disabled={!currentJoke}
            className='w-[230px] bg-[#29b363] p-2 shadow-inner'
            onClick={handleVoteNotFunny}
          >
            This is not funny.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joke;
