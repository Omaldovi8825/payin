import { useState } from "react"
import "../styles/Login.css"

const loginInitialState = {
    user: '',
    password: ''
}

const Login = ({onLoginSuccess}) => {

    const [loginState, setLoginState] = useState(loginInitialState)
    const [showError, setShowError] = useState(false)

    const onLogin = (e) => {
        e.preventDefault()

        if(loginState.user !== 'omavi' || loginState.password !== '112358' ){
            setShowError(true)
            setLoginState(loginInitialState)
        } else {
            onLoginSuccess(true)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        //console.log({name, value})
        setLoginState({
            ...loginState,
            [name]: value
        })
    }

    return (
        <div className="loginForm">
            <form onSubmit={onLogin}>
                <label>Usuario</label>
                <input
                    type="text"
                    name="user"
                    value={loginState.user}
                    onChange={handleChange}
                />
                <label>Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={loginState.password}
                    onChange={handleChange}
                />
                { showError &&
                <p className="loginError">Usuario o contraseña incorrectos</p>
                }
                <button type="submit">Login</button>
            </form>
        </div>  
    );
}
  
  export {Login};