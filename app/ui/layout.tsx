import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router";
import { TargetCursor } from "~/ui/target-cursor";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/#projects" },
  { label: "Contact", to: "/contact" },
];

type ThemeMode = "light" | "dark";

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    let savedTheme = document.documentElement.dataset.theme;
    try {
      savedTheme = window.localStorage.getItem("portfolio-theme") ?? savedTheme;
    } catch {
      // Keep the current document theme when browser storage is unavailable.
    }
    const restoredTheme = savedTheme === "dark" ? "dark" : "light";
    setTheme(restoredTheme);
    document.documentElement.dataset.theme = restoredTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // Theme switching still works for this visit without browser storage.
    }
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
