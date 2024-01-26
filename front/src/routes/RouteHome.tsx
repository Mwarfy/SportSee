import { useNavigate } from "react-router-dom";
import { USER_MAIN_DATA } from "../api/data";

export const RouteHome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full p-10 flex flex-col gap-5">
      {USER_MAIN_DATA.map((d, i) => (
        <div
          key={i}
          onClick={() => navigate(`/user/${d.id}`)}
          className="bg-slate-100 p-5 hover:bg-slate-200 rounded-lg hover:cursor-pointer flex flex-row gap-10">
          <div className="flex gap-5">
            <span className="font-bold">Prénom :</span>
            <span>{d.userInfos.firstName}</span>
          </div>
          <div className="flex gap-5">
            <span className="font-bold">Nom :</span>
            <span>{d.userInfos.lastName}</span>
          </div>
          <div className="flex gap-5">
            <span className="font-bold">Age :</span>
            <span>{d.userInfos.age}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
