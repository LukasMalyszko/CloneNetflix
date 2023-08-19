import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { selectUserEmail, setActiveUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

interface PrivateProps {
  page?: string;
}
export const PrivateRoutes: React.FC<PrivateProps> = ({ page }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const [isAuth, setIsAuth] = useState<boolean | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      console.log("userEmail", userEmail);
      if (userEmail === null) {
        await auth.authStateReady();

        if (auth.currentUser) {
          dispatch(
            setActiveUser({
              userName: auth.currentUser.displayName as string,
              userEmail: auth.currentUser.email as string,
            })
          );
          setIsAuth(true);
        } else {
          setActiveUser({
            userName: "",
            userEmail: "",
          });
          setIsAuth(false);
        }
      } else if (userEmail === "") {
        setIsAuth(false);
      } else {
        setIsAuth(true);
      }
    };
    fetchData();
  });
  if (isAuth === undefined) return null;
  if (page === "dashboard") {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
  }

  console.log("isAuth", isAuth);
  return isAuth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PrivateRoutes;
