import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/WorkoutDetais";
import WorkoutForm from "../components/WorkoutForm";


const Home = ()=>{
    const {workouts, dispatch} = useWorkoutsContext();

    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            try {
                const response = await fetch("/api/workouts/", { method: "GET" });
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: "SET_WORKOUTS", payload: json });
                }
            } catch (error) {
                console.error("Error fetching workouts:", error);
            }
        }

        fetchWorkouts();
    },[dispatch]);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout, index)=>(
                    <WorkoutDetails
                        key={index}
                        workout={workout}
                    />
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home;