
import { FaAirbnb } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import UserMenu from "./UserMenu";

import { Link } from "react-router-dom"


const Navbar = () => {

  return (
    <div className="w-full flex justify-between items-center p-3 px-28 ">

      <Link className="flex items-center gap 1rem font-bold text-2xl gap-1  text-privatepink w-1/2" to="/">
        <FaAirbnb className="text-4xl" />
        <span >airbnb</span>
      </Link>

      <ul className="hidden md:flex items-center-justify-center gap-4 w-2/4 ">
        <li className="font-semibold text-gray-800 "><a href="#">Logements</a></li>
        <li className="text-gray-500 font-light"><a href="#">Expériences</a></li>
        <li className="text-gray-500 font-light"><a href="#">Expériences en ligne</a></li>
      </ul>

      <div className="flex items-center justify-center gap-3 w-1/4">
        <h1 className=" flex rounded-full h-2/3 w-56 hover:bg-slate-100 hover:p-2  items-center text-center justify-center text-xs font-semibold">Mettre mon logement sur Airbnb
</h1>
        <a className="text-xl" href="#"><TbWorld /></a>

        <div className="flex items-center justify-center gap-3 border border-slate-200 p-2 rounded-full hover:shadow-lg cursor-pointer">
          <UserMenu />
        </div>
      </div>

    </div>
  )
}

export default Navbar;

