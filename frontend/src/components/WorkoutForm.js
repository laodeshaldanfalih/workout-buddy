import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = (props)=>{
    const {dispatch} = useWorkoutsContext();

    const [inputText, setInputText] = useState({
        title: "",
        reps: "",
        load: "",
    });

    const [error, setError] = useState(null);

    function handleInput(event){
        const {value, name} = event.target;

        setInputText((prevVal)=>{
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

    async function handleClick(event){
        event.preventDefault();
        const workout = inputText;
        console.log(workout);
        const response = await fetch("/api/workouts/", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if(!response.ok){
            setError(json.error)
        }
        
        if(response.ok){
            setError(null);
            setInputText({title: "", reps: "", load: ""});
            console.log("new workout added", json);
            dispatch({type: "CREATE_WORKOUT", payload: json});
        }
        
    }

    return (
        <div className="inputForm">
            <form className="create" onSubmit={handleClick}>
                <h3>Add a New Workout</h3>
                <label>Excersize Title:</label>
                <input type="text" name="title" onChange={handleInput} value={inputText.title}/>

                <label>Load (in kg):</label>
                <input type="number" name="reps" onChange={handleInput} value={inputText.reps}/>

                <label>Number of Reps:</label>
                <input type="number" name="load" onChange={handleInput} value={inputText.load}/>

                <button>Add Workout</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}

export default WorkoutForm;