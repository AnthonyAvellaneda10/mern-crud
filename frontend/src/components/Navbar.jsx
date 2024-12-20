import { Link } from "react-router-dom"

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  

  return (
    <div className="container mx-auto px-4 max-w-[1140px]">
      <div className="flex flex-col sm:flex-row items-center justify-between h-16">
        {/* Título */}
        <h1 className="text-center text-2xl sm:text-3xl font-bold uppercase bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text transition-colors duration-300 ease-in-out">
          <Link to="/">Product Store 🛒</Link>
        </h1>

        {/* Botones */}
        <div className="flex items-center space-x-2">
          {/* Botón para crear */}
          <Link to="/create">
            <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-square-plus text-gray-800 dark:text-white"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </button>
          </Link>

          {/* Botón para cambiar modo oscuro */}
          <button
            onClick={toggleColorMode}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 ease-in-out"
          >
            {isDarkMode ? (
              // Ícono para modo claro (sol)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun text-gray-800 dark:text-white"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              // Ícono para modo oscuro (luna)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon text-gray-800 dark:text-white"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar