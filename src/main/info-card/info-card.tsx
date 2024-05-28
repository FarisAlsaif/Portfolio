function InfoCard() {
  return (
    <div className="flex flex-col  w-full   p-6 rounded-3xl bg-slate-700  bg-gradient-to-br  from-[#FBED96] to-[#ABECD6] gap-6">
      <div>
        <img src="" alt="profile" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold ">Hello, I am faris 🤙</h1>
      </div>
      <div className="text-3xl font-medium ">
        I hope you are doing well. I am a software engineer and I love to code.
      </div>
      <div className="flex w-full gap-2 justify-evenly">
        <button className="py-2 text-sm font-medium text-white bg-black px-7 rounded-3xl">
          Contact
        </button>
        <button className="py-2 text-sm font-medium px-7 rounded-3xl">
          View Projects
        </button>
      </div>
    </div>
  );
}

export default InfoCard;
