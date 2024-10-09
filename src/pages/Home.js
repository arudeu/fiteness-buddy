import Hero from "../components/Hero";
import WorkoutCard from "../components/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("https://fitnessapp-api-ln8u.onrender.com/workouts/getMyWorkouts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWorkouts(data);
      });
  });

  return (
    <>
      <Hero />
      {workouts.length > 0 ? (
        workouts.map((workout) => {
          return (
            <>
              <WorkoutCard title={workout.name} text={workout.duration} />
            </>
          );
        })
      ) : (
        <h5 className="text-center py-5">No workouts found</h5>
      )}
    </>
  );
}
