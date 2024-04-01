import sunflower from '@/assets/sunflower.png';
const Navbar = () => {
  return (
    <div className=' w-[1000px] max-lg:w-[700px] max-md:w-[550px] max-sm:w-[400px] px-5 flex justify-between items-center m-auto'>
      <span className='text-[32px] font-bold'>HLS</span>
      <div className='flex gap-2 items-center'>
        <dir className='flex flex-col items-end'>
          <span className='text-gray-500 italic'>Handicrafted by</span>
          <p>Jim HLS</p>
        </dir>
        <img
          src={sunflower}
          alt='icon'
          className='size-12'
        />
      </div>
    </div>
  );
};

export default Navbar;
