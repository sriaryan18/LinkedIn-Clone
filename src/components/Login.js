import { useParams } from "react-router-dom";

const Login = (props)=>{
    const {id}=useParams();
    console.log("scsin");
    return (
        <h1>Login {id}</h1>
    );
}

export default Login;