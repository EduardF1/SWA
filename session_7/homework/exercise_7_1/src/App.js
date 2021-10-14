import {useState} from "react";
import {LoginForm} from "./components/LoginForm";

export function App() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    };

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        (details.email === adminUser.email && details.password === adminUser.password) ?
            setUser({
                name: details.name,
                email: details.email
            }) :
            setError(
                "Details do not match"
            )
    }
    const Logout = () => {
        setUser({
            email: "",
            password: ""
        })
    }

    return (
        <div className="App">
            {(user.email !== "") ? (
                <div className="welcome">
                    {/* Could be extracted in a separate component */}
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    );
}