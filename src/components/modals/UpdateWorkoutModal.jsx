import { useRef, useState, useEffect } from "react";

const UpdateWorkoutModal = ({ workoutData, hidden, setHidden, fetchData }) => {
  const formRef = useRef(null);
  const [workoutDetails, setWorkoutDetails] = useState({
    name: workoutData.name,
    muscleGroup: workoutData.muscleGroup,
    workoutType: workoutData.workoutType,
    intensity: workoutData.intensity,
  });

  useEffect(() => {
    setWorkoutDetails(workoutData);
  }, [workoutData]);

  const handleChange = (e) => {
    setWorkoutDetails({ ...workoutDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://motul-backend.vercel.app/api/workouts/${workoutData._id}`,
      {
        method: "PUT",
        body: JSON.stringify({ ...workoutDetails }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json);
    setHidden(true);
    fetchData();
  };

  return (
    <>
      {!hidden && (
        <form
          onSubmit={handleSubmit}
          className="w-[375px] flex flex-col justify-center items-center border-2 rounded-xl mt-32 px-4"
        >
          UPDATE
          <div className="grid grid-cols-2 gap-2 py-2 ">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              autoComplete="true"
              value={workoutDetails.name}
              onChange={handleChange}
            />
            <label className="label" htmlFor="muscleGroup">
              Muscle Group
            </label>
            <input
              id="muscleGroup"
              type="text"
              name="muscleGroup"
              className="input"
              placeholder="Chest"
              autoComplete="true"
              value={workoutDetails.muscleGroup}
              onChange={handleChange}
            />
            <label className="label" htmlFor="workoutType">
              Workout Type
            </label>
            <input
              id="workoutType"
              type="text"
              name="workoutType"
              className="input"
              placeholder="workoutType"
              autoComplete="true"
              value={workoutDetails.workoutType}
              onChange={handleChange}
            />
            <label className="label" htmlFor="intensity">
              Intensity
            </label>
            <select
              id="intensity"
              className="input w-14"
              name="intensity"
              value={workoutDetails.intensity}
              onChange={handleChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn bg-blue-500 py-0.5 px-1 mb-1 hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default UpdateWorkoutModal;
