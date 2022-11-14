import React from "react";

const Philosophy = (): JSX.Element => {
  return (
    <div className="bg-[#E2FF8A] mb-12 flex flex-col mb-48 sm:mb-16" id="philosophy">
      <div className="text-4xl md:text-5xl lg:text-7xl font-semibold self-center text-center bg-white border border-black p-6 md:px-24 m-3 md:m-0">
        Our Philosophy
      </div>
      <div className="md:w-1/2 p-10 text-xl md:text-2xl lg:text-3xl font-nunito bg-white border border-black m-3 md:m-0">
        Current events heavily prioritise corporate sponsors as ​speakers, leading to a bias towards speakers and thinkers ​who are financially more advantaged, and perpetuating ​biases and opaque ‘in-group’ networks that optimise not for ​merit but for privilege. The DAO forum proposes to form a ​collective of mission-aligned DAOs to transparently, ​inclusively and democratically curate events and speakers.
      </div>
      <div className="md:w-1/2 p-10 text-xl md:text-2xl lg:text-3xl font-nunito bg-white border border-black self-end m-3 md:m-0">
        The collective behind DAOVOS represents leading DAOs, each ​of which is on a mission to bring positive change to society ​and our environment by surfacing and amplifying the most ​suitable and impactful voices and ideas in the web3 space, in ​an effort to actively shape society and world we envision ​living in. DAOs and our collective minds offer the potential to ​unlock a multiverse of endeavours that create a dramatic ​change in the current mise-en-scène.
      </div>
    </div>
  );
};

export default Philosophy;