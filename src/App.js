import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './css/App.css';
import './css/Header.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';
import {login, logout} from './features/userSlice';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? ( 
        <Login />
       ) : (
        <div className='app_body'>
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
