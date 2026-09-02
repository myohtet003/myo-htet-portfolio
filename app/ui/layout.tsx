import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router";
import { TargetCursor } from "~/ui/target-cursor";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

type ThemeMode = "light" | "dark";

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
      return;
    }

    document.documentElement.dataset.theme = "light";
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Portfolio home">
          <span>MK</span>
          Myo Htet Kyaw
        </NavLink>
        <div className="flex gap-3">
          <nav className="nav-links" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <nav className="nav-links" aria-label="Main navigation"> 
              <a
                href="/myohtetkyaw.pdf"
                aria-label="View resume"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Resume
              </a> 
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            aria-pressed={theme === "dark"}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
            </span>
          </button>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <p>@myohtetkyaw</p>
      </footer>
      <TargetCursor />
    </div>
  );
}
