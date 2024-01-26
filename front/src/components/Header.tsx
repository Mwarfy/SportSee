import { Navigate, useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="h-18 w-full bg-black flex items-center">
      <img src={logo} className="h-16 p-2" />
      <div className="flex w-full text-white justify-around cursor-pointer h-full items-center ml-32">
        <span onClick={() => navigate("/")}>Accueil</span>
        <span>Profil</span>
        <span>Réglage</span>
        <span>Communauté</span>
      </div>
    </div>
  );
};
