"use client"
import { useState,useRef } from "react";



function password({getdata}){

const [type,Settype]=useState("password")
    const [passwordInput,Setpassword]=useState(null)
    const eyeon=useRef(null)
    const eyeoff=useRef(null)
const btn=useRef(null)
 
   const  toggleVisibility=()=> {
        console.log(btn.current.type) 
        if(type=="password"){
btn.current.type="text"
eyeon.current.classList.remove("hidden")
eyeoff.current.classList.add("hidden")
Settype("text")
        }
        else{
btn.current.type="password"
eyeon.current.classList.add("hidden")
eyeoff.current.classList.remove("hidden")
Settype("password")
        }
    }
//console.log(passwordInput)  
    return ( 

    <div className="overlay bg-white">
        <div className="password-popup" id="popup">
            <div className="icon-lock">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6"  viewBox="0 0 24 24" stroke="currentColor">
                    <path 
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            </div>

            <h2>Restricted Access</h2>
            <p>This content is protected. Please enter the password to view.</p>

            <form id="authForm">
                <div className="input-wrapper flex">
                    <input type={type} ref={btn} ty id="passwordInput" placeholder="Enter Password"  value={passwordInput} onChange={(e)=>Setpassword(e.target.value)}  required />
                    <div className="toggle-icon"   onClick={toggleVisibility}>
                     
                        <svg id="eyeIcon" ref={eyeon} xmlns="http://www.w3.org/2000/svg" className="w-6 hidden" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path 
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        
                        <svg id="eyeOffIcon" ref={eyeoff} xmlns="http://www.w3.org/2000/svg" className="w-6 "
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path 
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                    </div>
                </div>

                <button type="submit" className="submit-btn" id="submitBtn" onClick={(e)=>{ getdata(passwordInput); e.preventDefault(); }}>Access Content</button>
            </form>
        </div>
    </div>

 

)
}
export default password