import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export const LogOutComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
      navigate("/login");
      await auth
      .signOut()
      .then(() => {
          dispatch(setUserLogOutState());
        })
        .catch((err) => alert(err.message));
  };
  return <button onClick={handleSignOut}>Logout</button>;
};
