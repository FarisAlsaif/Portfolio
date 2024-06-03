import React from "react";

function InfoCard({
  footerRef,
}: {
  footerRef: React.RefObject<HTMLDivElement>;
}) {
  const handleScrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const hyperlink = "https://farisalsaif.com/cv.pdf";
    window.open(hyperlink, "_blank");
  };

  return (
    <div className="flex flex-col w-full p-6 rounded-3xl bg-slate-700 bg-gradient-to-br from-[#FBED96] to-[#ABECD6] gap-6">
      <div>{/* <img src="" alt="profile" /> */}</div>
      <div>
        <h1 className="text-2xl font-semibold">Hello, I am Faris 🤙</h1>
      </div>
      <div className="text-3xl font-medium">
        I'm excited to share my journey, skills, and projects with you. Dive in
        to explore my work and get to know me better!
      </div>
      <div className="flex w-full gap-2 justify-evenly">
        <button
          className="py-2 text-sm font-medium text-white bg-black px-7 rounded-3xl"
          onClick={handleScrollToFooter}
        >
          Contact
        </button>
        <button
          onClick={handleDownloadCV}
          className="py-2 text-sm font-medium px-7 rounded-3xl"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}

export default InfoCard;
