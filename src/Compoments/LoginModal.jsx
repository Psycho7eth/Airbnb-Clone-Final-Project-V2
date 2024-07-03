
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';

const LoginModal = ({ onClose }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full relative">
        <button onClick={(e) => {
  e.stopPropagation();
  onClose();
}}  className="absolute top-3 right-3 text-xl">
          <AiOutlineClose />
        </button>
        <h2 className="text-xl font-bold mb-4">Bienvenue sur Airbnb</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Connexion
          </button>
        </form>
        <div className="text-center my-4">ou continuez avec</div>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white p-2 rounded flex-1 mr-2 flex justify-center items-center">
            <FaFacebook className="mr-2" /> Facebook
          </button>
          <button className="bg-red-500 text-white p-2 rounded flex-1 mx-2 flex justify-center items-center">
            <FaGoogle className="mr-2" /> Google
          </button>
          <button className="bg-black text-white p-2 rounded flex-1 ml-2 flex justify-center items-center">
            <FaApple className="mr-2" /> Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
