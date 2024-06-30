import { TbWorld } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-between align-items border-t-2 m-auto w-3/4">
      <ul className="flex justify-between align-items gap-1 p-3 text-sm">
        <li>&copy; Airbnb, inc,</li>
        <li>&#183;</li>
        <a href="#">Confidentialité</a>
        <li>&#183;</li>
        <a href="#">Conditions générales</a>
        <li>&#183;</li>
        <a href="#">Plan du site</a>
        <li>&#183;</li>
        <a href="#">Fonctionnement du site</a>
        <li>&#183;</li>
        <a href="#">Infos sur l'entreprise</a>
      </ul>
      <ul className="flex justify-between items-center gap-2 p-3">
        <li><a href="#" className="font-bold flex items-center gap-1 text-xs"><TbWorld /> <p>Francais (FR)</p></a></li>
        <li><a href="#" className="font-bold text-xs">€ EUR</a></li>
        <li className="bg-gray-600 p-1"><a href="#" className="text-white text-xs"><FaFacebookF /></a></li>
        <li className="bg-gray-600 p-1"><a href="#" className="text-white text-xs"><FaTwitter /></a></li>
        <li className="bg-gray-600 p-1"><a href="#" className="text-white text-xs"><FaInstagram /></a></li>
      </ul>
    </footer>
  );
}
