import { NavLink } from "react-router";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Portfolio home">
          <span>MH</span>
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
            <NavLink className="nav-link" to="/resume" aria-label="View resume">
              Resume
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>
    </div>
  );
}
