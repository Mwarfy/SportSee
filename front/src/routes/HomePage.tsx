import { Aside } from "../components/Aside";
import { Header } from "../components/Header";
import { AsideIcons } from "../components/AsideIcons";
import { Graphs } from "../components/routeGraphs";
import { useGetUserQuery } from "../api/api";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

export const HomePage: React.FC = () => {
  const { id } = useParams();
  const { currentData, isFetching } = useGetUserQuery(
    id ? Number(id) : skipToken
  );

  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-60px)]">
        <Aside />
        {isFetching ? (
          <span className="m-auto justify-center items-center">
            Chargement...
          </span>
        ) : (
          <div className="flex flex-col px-20 py-3 w-full h-[calc(100vh-180px)]">
            <div className="flex gap-2 text-3xl font-bold mb-1">
              <span>Bonjour</span>
              <span className="text-red-500">
                {currentData?.data.userInfos.firstName}
              </span>
            </div>
            <div>
              <span className="text-sm">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </span>
            </div>
            <div className="flex gap-5 w-full h-full mt-5 ">
              <div className="w-9/12 bg-gray-50 rounded-lg">
                <Graphs />
              </div>
              <div className="w-3/12">
                <AsideIcons keyData={currentData?.data.keyData} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
