import './LoginPopup.css';
import {assets} from '../../assets/assets';
import React,{useState} from 'react';


const LoginPopup=({setShowLogin})=>{
    const[currentState,setCurrentState]=useState("Sign Up")

    return(
        <div className="login-popup">
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='cross'/>

                </div> 
                <div className='login-popup-inputs'>
                    {currentState==="Sign Up"?<input type='text' placeholder='Your name' required/>:<></>}
                    <input type='email' placeholder='Your Email' required/>
                    <input type='password' placeholder='Password' required/>
                    <button>{currentState==="Sign"?"Creat Account":"Login"}</button>

                </div>
                <div className='login-popup-condition'>
                    <input type='checkbox'/>
                    <p>By continuing ,i agree with the terms of use & Privacy Policy</p>

                </div>
                {currentState==="Sign Up"
                ?<p> Creat a new account ? <span onClick={()=>setCurrentState("Login")}>Click me</span>  </p>
                :<p>Creat a new account ?<span onClick={()=>setCurrentState("Sign Up")}>Click</span></p>}
                </form>
            </div>
        
    )
}
export default LoginPopup;