import React from "react";

export const Rules = () => {
  return (
    <div className=" flex flex-col justify-center w-[100vw] mx-auto bg">
      <h1 className="text-center text-glow text-5xl md:text-6xl font-semibold satoshi headings pb-1">
        Rules
      </h1>
      <div className="mx-4 md:my-12">
        <ul className="pl-10 text-xl font-Mori list-disc flex flex-col gap-4 max-w-3xl mx-auto leading-7 text-white/80 mori">
          <li>Participants are requested to show up at the venue on time.</li>
          <li>
          The session will start at 10AM, after which we will not be responsible for bringing any participants up to speed.
          </li>
          <li>
          Participants are allowed to form teams of at max 3 people during the competition. 
          </li>
          <li>
          Participants have to fill out a google form to let us know which participants are participating as a team and which participants are participating as a team.
          </li>
        </ul>
      </div>
    </div>
  );
};