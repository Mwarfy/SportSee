import logo from "../img/logo.svg";

export const Header: React.FC = () => {
  return (
    <div className="h-20 w-full bg-black flex items-center px-5">
      <img src={logo} />
      <div className="flex w-full text-white justify-around cursor-pointer h-full items-center ml-32">
        <span>Accueil</span>
        <span>Profil</span>
        <span>Réglage</span>
        <span>Communauté</span>
      </div>
    </div>
  );
};
