import React, { useState } from "react";
import knee from "../assets/images/knee.png";
import elbow from "../assets/images/elbow.png";
import shoulder from "../assets/images/shoulder.png";
import "./popup.css";
import TextField from "@mui/material/TextField";
// import PlotGraph from "./PlotGraph";
const Exercise = ({ imgSrc, title, handleOnClick }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card">
        <div className="icon-box">
          <img
            decoding="async"
            src={imgSrc}
            style={{ width: "100px", height: "100px" }}
            alt={title}
          />
        </div>
        <div>
          <h4>{title}</h4>
          <button className="main-btn mt-4" onClick={handleOnClick}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

const ExerciseSection = () => {
  const [popup, setPopup] = useState(false);
  const [targetReps, setTargetReps] = useState(10);
  const [sets, setSets] = useState([{ id: 1, reps: 0 }]);

  const handleOnClick = () => {
    setPopup(true);
  };

  const handleClose = () => {
    setPopup(false);
    setSets([{ id: 1, reps: 0 }]);
  };

  const handleAddSet = () => {
    const newSet = { id: sets.length + 1, reps: 0 };
    setSets([...sets, newSet]);
  };

  const handleRepChange = (setId, e) => {
    const newReps = parseInt(e.target.value, 10);

    setSets((prevSets) =>
      prevSets.map((set) =>
        set.id === setId ? { ...set, reps: newReps } : set
      )
    );

    if (newReps >= targetReps) {
      alert("Congratulations! Add a new set.");
      handleAddSet();
    }
  };

  const renderPopup = () => {
    if (popup) {
      return (
        <div className="popup backdrop-blur-sm bg-white/30 bg-opacity-70 p-4 rounded-md overflow-scroll">
          <div className="flex flex-row space justify-between space-x-40">
            <div>
              <h4 className="text-5xl font-extrabold dark:text-black">
                COUNT YOUR REPS
              </h4>
            </div>
            <div className="close ">
              {/* <button onClick={handleClose}>CLOSE</button> */}
              <button
                type="button"
                onClick={handleClose}
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
          </div>
          {/* <PlotGraph/> */}
          <span className="rep-inpt">
            <p className="text-black">
              <b>ENTER YOUR TARGET REPS</b>{" "}
            </p>{" "}
           
            <TextField
              id="standard-helperText"
              defaultValue="10"
              value={targetReps}
              onChange={(e) => setTargetReps(e.target.value)}
              variant="standard"
            />
          </span>

          {sets.map((set) => (
            <div key={set.id} className="sets">
              <p className="text-black">
                <b>SET {set.id}:</b>
              </p>
             
              <TextField
                id="standard-number"
                label="Number of reps"
                type="number"
                value={set.reps}
                onChange={(e) => handleRepChange(set.id, e)}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section id="data" className="services_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-5">
            <h3>Exercises</h3>
          </div>
        </div>
        <div className="row">
          <Exercise
            imgSrc={knee}
            title="Pain-Free Knees"
            handleOnClick={handleOnClick}
          />
          <Exercise
            imgSrc={elbow}
            title="Elbow-Flex"
            handleOnClick={handleOnClick}
          />
          <Exercise
            imgSrc={shoulder}
            title="Shoulder Care"
            handleOnClick={handleOnClick}
          />
        </div>
      </div>
      {renderPopup()}
    </section>
  );
};

export default ExerciseSection;
