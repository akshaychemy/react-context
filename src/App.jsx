
import './App.css'
//importing context data
import { useContext, useReducer } from "react";
import { AuthContext } from "./context/AuthContext";

//importig the reducer
import {AuthReducer ,INITIAL_STATE} from './context/AuthReducer';

import { ExampleReducer_INITIAL_STATE,ExampleReducer } from '../Example/reducer';

function App() {
  const { user } = useContext(AuthContext);

  //========Example Code====starts
  const [state,dispatch] =useReducer(ExampleReducer,ExampleReducer_INITIAL_STATE)
  const ExampleFunction =(e)=>{
    dispatch({
      type:"LOGIN",
      payload:{
        name:e.target.name,
        age:e.target.age
      }
    })
  }
  //========Example Code====ends

  return (
    <>
      <div className="card">
        <p>
          this is user data {user}
        </p>
      </div>
    </>
  )
}

export default App
