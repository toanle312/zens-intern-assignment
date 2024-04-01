const Content = () => {
  return (
    <div className='flex h-full bg-[#29b363] text-white font-[500]'>
      <div className='w-[1000px] m-auto flex flex-col gap-2 max-lg:w-[700px] max-md:w-[550px] max-sm:w-[400px]'>
        <h1 className='text-center text-[28px] tracking-wider'>
          A joke a day keeps the doctor away
        </h1>
        <p className='text-center text-[12px] tracking-wide'>
          If you joke wrong away, your teeth have to pay. (Serious)
        </p>
      </div>
    </div>
  );
};

export default Content;
