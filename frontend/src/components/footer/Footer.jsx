const Footer = () => {
  return (
    <div className='w-[1024px] flex flex-col gap-2 items-center justify-center h-full p-5 m-auto'>
      <div className='flex flex-col text-gray-500 text-[14px] items-center justify-center text-center'>
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
