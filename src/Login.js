import React, { useState } from 'react'
import Navigationss from './Components/Topna';
import { auth, app } from "./Firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';




    


const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/home")
            //console.log(userCredential)
        })
        .catch((error) => {
            console.log(error)
        });
    }

   
    

  return (
    <>
    <Navigationss/>
    <div className="container-signin">
        <section class="wrapper">
            <div class="heading">
                <h1 className="ltit"><strong>Sign In</strong></h1>
                <p class="text text-normal">New User?<span><a href="/signup" class="text text-links">Create an account</a></span></p>
            </div>
            <form onSubmit={signIn}>
                <div class="input-control">
                    <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} class="input-field">

                    </input>
                </div>
                <div class="input-control">
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} class="input-field">

                    </input>
                </div>
                <button type="submit" name="submit" class="input-submit" value="Sign In">Sign In</button>
            </form>

        </section>
    </div>
    </>
  );
};

export default Login
