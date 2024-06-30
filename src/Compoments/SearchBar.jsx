import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="border-b-2 pb-5">
      <div className="bar w-2/4 shadow-md rounded-full m-auto border border-gray-300 flex items-center  overflow-hidden p-2 py-2 justify-center">
        <button className=" flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200 w-[34%]">
          <p className="text-xs font-semibold">Destination</p>
          <span className="text-xs text-gray-400 font-light">
            Rechercher une destination
          </span>
        </button>
        <button className="barsearch flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200 w-[22%]">
          <p className="text-xs font-semibold">Arrivée</p>
          <span className="text-xs text-gray-400 font-light">Quand ?</span>
        </button>
        <button className="barsearch flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200  w-[22%]">
          <p className="text-xs font-semibold ">Départ</p>
          <span className="text-xs text-gray-400 font-light">Quand ?</span>
        </button>
        <button className="barsearch flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200 w-[22%]">
          <p className="text-xs font-semibold">Voyageurs</p>
          <span className="text-xs text-gray-400 font-light">
            Ajouter un voyageurs
          </span>
        </button>
        <button className="rounded-full bg-privatepink hover:bg-pink-700 text-white text-2xl p-3">
          <IoIosSearch />{" "}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;