import React, { useState } from "react"
import "./login.css"

const Login =function ({}) {
    const [name, setName] = useState<string>([]);
    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.name);
    };
    const [phone, setPhone] = useState<number>([]);
    const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.phone);
    };
    const [email, setEmail] = useState<string | number>();
    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const [login,setLogin]=useState<string | undefined>();
    const loginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
       setLogin(event.target);
    };
    return (
        <form
        className="form">
            <input type="text" name="name" value={name} placeholder="name" onChange={nameHandler} />
            <input type="number" name="phone" value={phone} placeholder="phone" onChange={phoneHandler} />
            <input type="email" name="email" value={email} placeholder="email" onChange={emailHandler} />
            <button value={login} onClick={loginHandler}>login</button>
        </form>
    );
}
export default Login;