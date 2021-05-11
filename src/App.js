import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import { auth } from './components/firebase';
import Header from './components/Header';
import Login from './components/Login';
import NewsLetter from './components/NewsLetter';
import Sidebar from './components/Sidebar';
import { login, logout, selectUser } from './features/userSlice';



function App() {
  const user = useSelector(selectUser)
 const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //user logged in
        dispatch(login({
          email :userAuth.email,
          uid :userAuth.uid,
          name : user.name,
          photoUrl :user.photoUrl,
        }))

      }
      else{
        //user logged out
        dispatch(logout)

      }
    })
  },[])
  return (
    <div className="app">
      {/*header */}
     
   {!user ? (<Login />):(
     <>
      <Header />
    <div className="sidebarmain">
      <Sidebar />
      <Feed />
      <NewsLetter />
    </div>
    </>)}

    </div>
  );
}

export default App;
