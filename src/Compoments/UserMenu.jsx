import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleOpenModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
    // setIsOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative z-30">
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <IoMdMenu className="text-2xl" />
        <FaCircleUser className="text-3xl" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg py-2 text-sm">
          {isAuthenticated ? (
            <>
              <Link
                to="/messages"
                className="block px-3 py-4 text-gray-900 hover:bg-gray-100 font-semibold"
              >
                Messages
              </Link>
              <Link
                to="/notifications"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100 font-light"
              >
                Notifications
              </Link>
              <Link
                to="/trips"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Voyages
              </Link>
              <Link
                to="/favorites"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Favoris
              </Link>
              <Link
                to="/host"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Mettre mon logement sur Airbnb
              </Link>
              <Link
                to="/refer-host"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Parrainer un hôte
              </Link>
              <Link
                to="/account"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Compte
              </Link>
              <Link
                to="/gift-cards"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Carte cadeaux
              </Link>
              <Link
                to="/help"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Centre d'aide
              </Link>
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleOpenModal("register")}
                className="block w-full text-left px-3 py-4 text-gray-900 hover:bg-gray-100 font-semibold"
              >
                Inscription
              </button>
              <button
                onClick={() => handleOpenModal("login")}
                className="block text-left w-full px-4 py-3 text-gray-500 hover:bg-gray-100 font-light"
              >
                Connexion
              </button>
              {/* <Link to="/register" className="block px-3 py-4 text-gray-900 hover:bg-gray-100 font-semibold">Inscription</Link>
              <Link to="/login" className="block px-4 py-3 text-gray-500 hover:bg-gray-100 border-b-2 font-light">Connexion</Link> */}
              <Link
                to="/gift-cards"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Carte cadeaux
              </Link>
              <Link
                to="/host"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Mettre mon logement sur Airbnb
              </Link>
              <Link
                to="/help"
                className="block px-4 py-3 text-gray-500 hover:bg-gray-100"
              >
                Centre d'aide
              </Link>
            </>
          )}
          {isModalOpen && <LoginModal modalContent={modalContent} onClose={handleCloseModal}></LoginModal>}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
