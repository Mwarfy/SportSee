import icon from "../img/icon.svg";
import icon1 from "../img/icon1.svg";
import icon2 from "../img/icon2.svg";
import icon3 from "../img/icon3.svg";

export const Aside: React.FC = () => {
  return (
    <div className="w-20 h-full flex flex-col gap-5 bg-black justify-center items-center">
      <img src={icon} className="w-12" />
      <img src={icon1} className="w-12" />
      <img src={icon2} className="w-12" />
      <img src={icon3} className="w-12" />
    </div>
  );
};
