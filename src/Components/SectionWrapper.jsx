import React from "react";

const SectionWrapper = ({ children, header, title }) => {
  return (
    <>
      <section className="min-h-screen flex flex-col gap-10">
        <div className="bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center ">
          <p className="uppercase font-medium">{header}</p>
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {title[0]} <span className="text-purple-500">{title[1]} </span>{title[2]}
          </h2>
        </div>
        <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
        {children}
        </div>
        
      </section>
    </>
  );
};

export default SectionWrapper;
