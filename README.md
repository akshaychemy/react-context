# Redux and Reducer Usage


if u want to user reducer and dispath in any u can do that this way

//====explample   1





//======>example 2

1. inside of reducer page create initial state and reducer and export it
2. wherever u want to use reducer import there and and use useReducer()

//====

import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";

const Add = () => {
    const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

    const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };
}
