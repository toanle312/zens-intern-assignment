import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Content from '@/components/content/Content';
import Joke from '@/components/joke/Joke';

function App() {
  return (
    <div className='w-full min-h-[100vh] flex flex-col'>
      <div className='w-full h-[80px]'>
        <Navbar />
      </div>
      <div className='w-full h-[200px]'>
        <Content />
      </div>
      <div className='flex-[0.9] w-full'>
        <Joke />
      </div>
      <div className='w-full h-[150px] max-lg:h-[50px] '>
        <hr className='border-gray-300' />
        <Footer />
      </div>
    </div>
  );
}

export default App;
