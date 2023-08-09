// import React from 'react'
import { auth, googleProvider } from "../../config/firebase";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserName,
  selectUserEmail,
} from "../../redux/userSlice";
import { signInWithPopup } from "firebase/auth";

export const TestRedux2 = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      dispatch(
        setActiveUser({
          userName: result.user.displayName as string,
          userEmail: result.user.email as string,
        })
      );
    });
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>

        <div className="test">
          {userName ? (
            <div>
                <div>Welcome {userName}</div>
                <button onClick={handleSignOut}>Sign out</button>
            </div>
          ) : (
            <button onClick={handleSignIn}>Sign in</button>
          )}
        </div>
    </div>
  );
};
