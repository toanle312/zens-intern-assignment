const Footer = () => {
  return (
    <div className='max-sm:w-[400px] max-md:w-[550px] max-lg:w-[700px] w-[1000px] flex flex-col gap-2 items-center justify-center h-full p-5 m-auto'>
      <div className='max-lg:hidden flex flex-col text-gray-500 text-[14px] items-center justify-center text-center'>
        <span>
          This website is created as part of Hlsolutions program. The materials
          contained on this website are provided for general
        </span>
        <span>
          information only and do not constitute any form of advice. HLS assumes
          no responsibility for the accuracy of any particular statement and
        </span>
        <span>
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </span>
      </div>
      <p>Copyright ©️ 2021 HLS</p>
    </div>
  );
};

export default Footer;
