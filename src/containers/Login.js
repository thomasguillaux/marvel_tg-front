import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();
    
    const handleSubmit = async (event) => {
        try {
            
        event.preventDefault();
        const response = await axios.post("http://localhost:3001/login", {
            email: email,
            password: password
        });
        const token = response.data.token;
        setUser(token);
        history.push("/");
        console.log(token)

        } catch (error) {
            console.log(error.message);
        }
        
    };

    return (
        <div className="login__section">

            <div>
            <form onSubmit={handleSubmit} className="login__module">
                <input onChange={(event) => setEmail(event.target.value)} type="text" placeholder="Email"/>
                <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password"/>
                <button className="login__button" type="submit">Log In</button>
            </form>
            </div>
            <div style={{ marginTop :'30px'}}>
            <Link to="/signup" style={{
                textDecoration: 'none',
            }}>Don't have an account yet?</Link >
            </div>
            
        </div>
    )
}

export default Login;