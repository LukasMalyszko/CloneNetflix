import "./LogOutComponent.scss";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export const LogOutComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await auth
    .signOut()
    .then(() => {
      dispatch(setUserLogOutState());
    })
    .catch((err) => alert(err.message));
    navigate("/login");
  };
  return <button className="logout-button" onClick={handleSignOut}>Logout</button>;
};
