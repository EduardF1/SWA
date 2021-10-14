import {FormGroupItem} from "./FormGroupItem";
import {useState} from "react";

export const LoginForm = ({Login, error}) => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: ""
    });
    const submitHandler = event => {
        event.preventDefault();
        Login(details);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2 className={"form_title"}>Login</h2>
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <FormGroupItem labelType="name" onChange={event => setDetails({...details, name: event.target.value})} value={details.name}/>
                    <FormGroupItem labelType="email" onChange={event => setDetails({...details, email: event.target.value})} value={details.email}/>
                    <FormGroupItem labelType="password" onChange={event => setDetails({...details, password: event.target.value})} value={details.password}/>
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </>
    );
};