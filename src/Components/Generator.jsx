import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/exercise";
import Button from "./Button";


const Generator = ({poison,setPoison,muscles,setMuscles,goal,setGoal,updateWorkout}) => {

  const [showModal,setShowModal] = useState(false)
   

  function toggleModal(){
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (!muscles) {
      setMuscles([]);
      return;
    }

    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup));
      return;
    }

    if (muscles.length > 3) {
      return;
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    const updatedMuscles = [...muscles, muscleGroup];
    setMuscles(updatedMuscles);
    
    // Close the modal if 3 muscles are selected
    if (updatedMuscles.length === 3) {
      setShowModal(false);
    }
  }

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
            onClick={()=>{
              setMuscles([])
              setPoison(type)
            }}
              className={'bg-slate-950 border py-2 rounded-lg duration-200  '+(type === poison ? ' border-blue-600': 'border-purple-400')}
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
      <div className=" flex flex-col bg-slate-950 p-3 border border-purple-400 py-2 px-4 rounded-lg duration-200 hover:border-purple-600 ">
        <button onClick={toggleModal} className="relative flex items-center justify-center ">
          <p className="capitalize">{muscles.length == 0 ? "Select muscle groups": muscles.join(" ")}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal &&(
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual" ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => updateMuscles(muscleGroup)}
                  key={muscleGroupIndex}
                  className={"hover:text-purple-500 duration-100 " + (muscles.includes(muscleGroup) ? 'text-purple-400' : '')}
                >
                  <p className="capitalize">{muscleGroup}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
            onClick={()=>{
              setGoal(scheme)
            }}
              className={'bg-slate-950 border py-2 rounded-lg duration-200 px-4  '+(scheme === goal ? ' border-blue-600': 'border-purple-400')}
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replace("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"}/>
    </SectionWrapper>
    
  );
};

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
export default Generator;
