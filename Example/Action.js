export const Login =(Credentials)=>({
    type:"LOGIN",
    payload:Credentials
})


export const Logout =()=>({
    type:"LOGOUT",
})