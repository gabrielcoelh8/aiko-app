import { useState } from "react";
import SettingsPopup from "./SettingsPopUp";
import {
  Sun,
  Menu,
  X,
  Bell,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  House,
  Plus,
  Settings,
  Info,
  LibraryBig
} from "lucide-react";

interface NavbarProps {
  textAlignment: "left" | "right" | "center" | "justify";
  setTextAlignment: (
    alignment: "left" | "right" | "center" | "justify"
  ) => void;
}

const Navbar: React.FC<NavbarProps> = ({ textAlignment, setTextAlignment }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black px-4 py-3">
      {/* Mobile Version */}
      <div className="flex justify-between items-center lg:hidden">
        <button
          type="button"
          className="p-2 hover:bg-gray-800 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        <div className="flex space-x-4">
          <button type="button" className="p-2 hover:bg-gray-800 rounded">
            Profile
          </button>
          <button type="button" className="p-2 hover:bg-gray-800 rounded">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Desktop Version */}
      <div
        className={`lg:flex justify-between items-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Left Navigation */}
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
          <button
            type="button"
            className="p-2 hover:bg-gray-800 rounded-full"
            aria-label="Início"
          >
            <House />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-800 rounded-full"
            aria-label="Voltar"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-800 rounded-full"
            aria-label="Avançar"
          >
            <ChevronRight />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-800 rounded-full"
            aria-label="Mais opções"
          >
            <LibraryBig />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-800 rounded-full"
            aria-label="Mais opções"
          >
            <Info />
          </button>
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex space-x-4">
          <button
            type="button"
            className="p-2 hover:bg-gray-800 rounded-full"
            aria-label="Adicionar"
          >
            <Plus />
          </button>

          <button
            type="button"
            className="p-2 hover:bg-gray-800 rounded-full"
            aria-label="Notificações"
          >
            <Bell />
          </button>
          <button
            type="button"
            className="p-2 hover:bg-gray-800 rounded-full"
            aria-label="Perfil"
          >
            <CircleUser />
          </button>

          {/* Settings Popup Section */}
          <div className="flex items-center space-x-4 order-1 lg:order-2">
            <SettingsPopup
              textAlignment={textAlignment}
              setTextAlignment={setTextAlignment}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
