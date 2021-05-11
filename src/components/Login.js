import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './login.css'
import {auth} from './firebase'
import {login} from '../features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword] =useState('')
    const [profile,setProfile] = useState('')
    const [name,setName]=useState('')
    const dispatch= useDispatch()


    const signin=(e)=>{
        e.preventDefault()
        if(!email || !password){
            alert( 'please fill in your email and password')
        }
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email :userAuth.email,
                uid :userAuth.uid,
                name : userAuth.name,
                photoUrl :userAuth.photoUrl,
              }))
        })
        .catch(err=>alert(err))

    }
    const register=()=>{
        if(!name){
            alert('please provide full name')
        }
      
            auth.createUserWithEmailAndPassword(email,password)
            .then((userAuth)=>{
                userAuth.user.updateProfile({
                    name :name,
                    photoUrl :profile,
                })
                .then(()=>{
                    dispatch(
                        login({
                        email :userAuth.user.email,
                        uid : userAuth.user.uid,
                        name : name,
                        photoUrl :profile,

                    })
                    )
                })
            })
            .catch(err=>alert(err))
        

    }
    return (
        <div className="sign_up">
        <div className="main_login">
         <div className="login_page">
             <img src="https://amazeinvent.com/wp-content/uploads/2021/02/LinkedIn.png" alt="Linked in" />
             <form>
                 <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Full Name (required if registering)' />
                 <input type="text" value={profile} onChange={e=>setProfile(e.target.value)} placeholder='Profile pic URL (optional)' />
                 <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' />
                 <input type="passWord" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' />
                 <Button type='submit' onClick={signin}> Sign in</Button>
                 <p>Not already a member ? <span className='register_span' onClick={register}>Register Now</span></p>
             </form>
         </div>
        </div>
     </div>   
    )
}

export default Login
