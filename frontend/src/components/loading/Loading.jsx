import './loading.css';
import loading from '@/assets/loading.png';

const Loading = ({ className }) => {
  return (
    <img
      src={loading}
      alt='loading'
      className={`${className} logo`}
    />
  );
};

export default Loading;
