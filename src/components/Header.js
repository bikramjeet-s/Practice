import { useState } from 'react';
import Logo from '../../logo.jpeg'

const Header = () => {
    const [loginStatus, setLoginStatus] = useState("Login");
    const handleLogin =() =>{
        loginStatus=='Login'?setLoginStatus('Logout'):setLoginStatus('Login');
    }
    console.log("Header rendered")
    return (
        <div id='header'>
            <div id='logo-container'>
            <img className='logo' src ={Logo}></img>
            </div>
            <div id='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li><button onClick={handleLogin}>{loginStatus}</button></li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>  
        </div>
    )
}

export default Header;