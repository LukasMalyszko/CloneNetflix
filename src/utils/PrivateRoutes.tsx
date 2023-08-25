import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { selectUserEmail, setActiveUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoadPage } from "../pages/LoadPage/LoadPage";

interface PrivateProps {
  isLogged: boolean;
}

export const PrivateRoutes: React.FC<PrivateProps> = ({ isLogged }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const [isAuth, setIsAuth] = useState<boolean | undefined>();

  useEffect(() => {
    const fetchData = async () => {
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
            isLogged = true;
        } else {
            setActiveUser({
                userName: "",
                userEmail: "",
            });
            setIsAuth(false);
            isLogged = false;
        }
    } else if (userEmail === "") {
        setIsAuth(false);
        isLogged = false;
    } else {
        setIsAuth(true);
        isLogged = true;
    }
};
fetchData();
});
if (isAuth === undefined) return <LoadPage />;
if (isLogged) {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

return isAuth ? <Navigate to="/dashboard" /> : <Outlet />;
};
