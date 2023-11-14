export const ExampleReducer_INITIAL_STATE={
    name:'',
    age:0
}

//export const ExampleReducer = (state=INITIAL_STATE,action)=>{
export const ExampleReducer = (state,action)=>{
    switch(action.type){
        case"LOGIN":
        return{
            ...state,
            name:action.payload.name,
            age:action.payload.age,
        }
        case "LOGOUT":
            return{
                ...state,
                name:'',
                age:0
            }
        default:
            return state;

    }
}