import React from "react";
import { BiSolidSpeaker } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FaRepeat, FaShuffle, FaVolumeLow } from "react-icons/fa6";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { LuListMusic } from "react-icons/lu";

const PlayBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-24 bg-primary-100 text-white flex items-center justify-between px-6 z-50">
      {/* Música atual */}
      <div className="flex items-center space-x-4 w-1/3">
        <div className="w-14 h-14 bg-neutral-700 rounded-md" />
        <div className="text-sm">
          <p className="font-semibold">Nome da Música</p>
          <p className="text-xs text-gray-400">Artista</p>
        </div>
      </div>

      {/* Controles de reprodução */}
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center space-x-4 mb-1">
          <FaShuffle
            size={18}
            className="text-gray-400 hover:text-white cursor-pointer"
          />
          <IoMdSkipBackward
            size={20}
            className="hover:text-white cursor-pointer"
          />
          <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition">
            <FaPlay size={20} />
          </button>
          <IoMdSkipForward
            size={20}
            className="hover:text-white cursor-pointer"
          />
          <FaRepeat
            size={18}
            className="text-gray-400 hover:text-white cursor-pointer"
          />
        </div>
        <div className="flex items-center space-x-2 w-full">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="h-1 bg-gray-600 rounded-full w-full relative">
            <div className="absolute h-1 bg-white rounded-full w-1/3" />
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      {/* Controles laterais */}
      <div className="flex items-center justify-end space-x-4 w-1/3">
        <LuListMusic
          size={18}
          className="text-gray-400 hover:text-white cursor-pointer"
        />
        <BiSolidSpeaker
          size={18}
          className="text-gray-400 hover:text-white cursor-pointer"
        />
        <div className="flex items-center space-x-2">
          <FaVolumeLow
            size={18}
            className="text-gray-400 hover:text-white cursor-pointer"
          />
          <div className="w-20 h-1 bg-gray-600 rounded-full relative">
            <div className="absolute h-1 bg-white rounded-full w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
