import {useDispatch} from "react-redux";
import {login, logout} from "../features/user";

const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button className={'btn'} onClick={() => {
                dispatch(login({name: "A", age:23, email:"ed@ed.com"}))
            }}>
                Login
            </button>
            <button className={'btn'} onClick={() => {
                dispatch(logout())
            }}>
                Logout
            </button>
        </div>
    );
};

export default Login;