import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface ProtectedRouteProps {
  user: any;
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({user, children}) => {
  const navigate = useNavigate();
  user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    } 
      
  }, []);

  return children
}
