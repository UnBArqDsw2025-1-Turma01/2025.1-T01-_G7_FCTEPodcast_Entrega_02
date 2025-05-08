import React from "react";
import NavBar from "../../component/navbar/NavBar";
import SideBar from "../../component/sidebar/SideBar";
import PlayBar from "../../component/playbar/PlayBar";

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <div className="flex-1 p-6 overflow-auto pb-24">
          {" "}
          {/* padding bottom para não esconder conteúdo atrás do player */}
          <h1 className="text-3xl font-semibold">Página Inicial</h1>
        </div>
      </div>
      <PlayBar />
    </div>
  );
};

export default Home;
