import { IKeyData } from "../types/general";
import energy from "../img/energy.svg";
import chicken from "../img/chicken.svg";
import apple from "../img/apple.svg";
import cheeseburger from "../img/cheeseburger.svg";
import { Icon } from "./Icon";

export const AsideIcons: React.FC<{ keyData?: IKeyData }> = ({ keyData }) => {
  return (
    <div className="grid grid-row-4 gap-5 h-full">
      <Icon
        icon={energy}
        keyData={keyData?.calorieCount + "kCal"}
        color={"bg-red-100"}
        text={"Calories"}
      />
      <Icon
        icon={chicken}
        keyData={keyData?.proteinCount + "g"}
        color={"bg-blue-100"}
        text={"Proteines"}
      />
      <Icon
        icon={apple}
        keyData={keyData?.carbohydrateCount + "g"}
        color={"bg-yellow-100"}
        text={"Glucides"}
      />
      <Icon
        icon={cheeseburger}
        keyData={keyData?.lipidCount + "g"}
        color={"bg-purple-100"}
        text={"Lipides"}
      />
    </div>
  );
};
