import {
  RiClapperboardFill,
  RiFolderMusicFill,
  RiPlayListFill,
} from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="w-72 bg-primary-50 text-white p-4">
      <div className="w-full flex flex-col gap-4">
        <button className="bg-primary-100 p-5 w-full rounded-xl hover:bg-primary-200 transition duration-300 text-left flex flex-col gap-4">
          <h2 className="flex items-center gap-4 font-bold">
            <RiFolderMusicFill className="text-xl" />
            Sua Biblioteca
          </h2>
          <p>Organize, descubra e aproveite</p>
        </button>

        <button className="bg-primary-100 p-5 w-full rounded-xl hover:bg-primary-200 transition duration-300 text-left flex flex-col gap-4">
          <h2 className="flex items-center gap-4 font-bold">
            <RiPlayListFill className="text-xl" />
            Criar Playlist
          </h2>
          <p>Organize conversas que te inspiram</p>
        </button>

        <button className="bg-primary-100 p-5 w-full rounded-xl hover:bg-primary-200 transition duration-300 text-left flex flex-col gap-4">
          <h2 className="flex items-center gap-4 font-bold">
            <RiClapperboardFill className="text-xl" />
            Studio
          </h2>
          <p>O backstage do seu conteúdo em áudio</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
