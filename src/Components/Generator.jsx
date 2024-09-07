import React from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS } from "../utils/exercise";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400 ">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

const Generator = () => {

  let showModal = true

  return (
    <SectionWrapper
      header="generate your workout"
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick Your Poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className="bg-slate-950 border border-purple-400 py-4 rounded-lg duration-200 hover:border-purple-600 "
              key={typeIndex}
            >
              <p className="capitalize">{type.replace("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation"}
      />
      <div className="bg-slate-950 p-3 border border-purple-400 py-4 rounded-lg duration-200 hover:border-purple-600 ">
        <button className="relative flex items-center justify-center ">
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal &&(
          <div>modal</div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Generator;
