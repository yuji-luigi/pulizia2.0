import React, { ReactNode } from "react";

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="header">
        <h2 className="logo-text">2.0</h2>
      </header>
      <div className="main-grid">
        <div>
          <nav className="nav">
            <a href="/" className="nav-link">
              PULIZIA
            </a>
            <a href="/about" className="nav-link">
              FRAGANZ
            </a>
            <a href="/contact" className="nav-link">
              ECORARMONIA
            </a>
            <a href="/contact" className="nav-link">
              OASI DI BENESSERE
            </a>
          </nav>
          {children}
        </div>
        <div className="sidebar">
          <div className="sticky">
            <h2 className="sidebar-title">Pulizia 2.0</h2>
            <p className="sidebar-text">
              Pulizia 2.0 is a cleaning service in the city of Milan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
