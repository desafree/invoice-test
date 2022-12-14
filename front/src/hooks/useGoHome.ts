import { useNavigate } from "react-router-dom";

function useGoHome() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return goHome;
}

export default useGoHome;
