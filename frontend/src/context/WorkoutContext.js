import React, {createContext, useReducer} from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) =>{

    switch(action.type) {
        case "SET_WORKOUTS":
            return {
                workouts: action.payload
            };
        case "CREATE_WORKOUT":
            return {
                workouts: [...state.workouts, action.payload]
            };
        case "DELETE_WORKOUT":
            console.log("deleting...");
            return {
                workouts: state.workouts.filter((foundWorkouts) => foundWorkouts._id !== action.payload._id)
            }
        default: 
            return state;
    }
};

export const WorkoutContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    });

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    )
}