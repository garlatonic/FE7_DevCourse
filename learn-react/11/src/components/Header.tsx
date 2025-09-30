import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock user state - in real app, this would come from context/state management
  const [isLoggedIn] = useState(false);
  const [user] = useState({
    name: "John Doe",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
  });

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/blog", label: "Blog" },
    { path: "/blog/create", label: "Write" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/blog"
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Blog
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {isLoggedIn ? (
              <div className="flex items-center ml-6 pl-6 border-l border-gray-200">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                  title={`Go to ${user.name}'s profile`}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-200 hover:border-gray-300 transition-colors"
                  />
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
                <Link
                  to="/login"
                  className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Login
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isLoggedIn ? (
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {user.name}
                    </span>
                  </Link>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <Link
                    to="/login"
                    className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors w-fit"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
