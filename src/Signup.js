import React, { useState } from 'react'
import Navigationss from './Components/Topna';
import { auth, app } from "./Firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/login")
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
                <h1 className="rtitle"><strong>Register</strong></h1>
                <p class="text text-normal">Already a user?<span><a href="/login" class="text text-links">Log In</a></span></p>
            </div>
            <form onSubmit={signUp}>
            <div class="input-control">
                    <input type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} class="input-field">

                    </input>
                </div>
                <div class="input-control">
                    <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} class="input-field">

                    </input>
                </div>
                <div class="input-control">
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} class="input-field">

                    </input>
                </div>
                <button type="submit" name="submit" class="input-submit" value="Sign In">Submit</button>
            </form>

        </section>
    </div>
    </>
  );
};


export default Signup
