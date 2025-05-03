import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: "/", name: "Главная" },
    { path: "/pros", name: "За" },
    { path: "/cons", name: "Против" },
    { path: "/examples", name: "Примеры" },
    { path: "/conclusions", name: "Выводы" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold hover:text-emerald-600 transition-colors"
          >
            Eco<span className="text-emerald-500">Logic</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`
                    px-1 py-2 block 
                    ${
                      link.path === location.pathname
                        ? "text-emerald-600 font-medium"
                        : "text-gray-700 hover:text-emerald-600"
                    }
                    relative after:content-[''] after:absolute after:bottom-0 after:left-0 
                    after:w-full after:h-0.5 after:bg-emerald-500 
                    after:scale-x-0 after:origin-left
                    hover:after:scale-x-100 after:transition-transform after:duration-200 after:ease-out
                    ${
                      link.path === location.pathname ? "after:scale-x-100" : ""
                    }
                  `}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
