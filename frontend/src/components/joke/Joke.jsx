const Joke = () => {
  return (
    <div className='w-[1024px] m-auto p-8'>
      <div className='flex flex-col gap-10 items-center justify-center'>
        <span className='px-5 text-gray-600'>
          This website is created as part of Hlsolutions program. The materials
          contained on this website are provided for general information only
          and do not constitute any form of advice. HLS assumes no
          responsibility for the accuracy of any particular statement and
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </span>
        <hr className='w-[750px]' />
        <div className='flex justify-center items-center gap-6 font-[400] text-white'>
          <button className='w-[230px] bg-[#2c7edb] p-2 shadow-inner'>
            This is Funny!
          </button>
          <button className='w-[230px] bg-[#29b363] p-2 shadow-inner'>
            This is not funny.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joke;
