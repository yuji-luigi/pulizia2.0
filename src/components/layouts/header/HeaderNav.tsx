import React from "react";

export const HeaderNav = ({
  isHeaderVisible,
}: {
  isHeaderVisible: boolean;
}) => {
  console.log(!isHeaderVisible);
  return (
    <div
      className="sticky-header layout-grid header-nav"
      data-is-visible={!isHeaderVisible}
    >
      <nav className="nav">
        <a href="/" className="nav-link">
          PULIZIA
        </a>
        <a href="/" className="nav-link">
          FRAGANZ
        </a>
        <a href="/" className="nav-link">
          ECORARMONIA
        </a>
        <a href="/" className="nav-link">
          OASI DI BENESSERE
        </a>
      </nav>
      <div className="side-header mobile">
        <h2 className="sidebar-title logo">Pulizia 2.0</h2>
        <p className="sidebar-text">
          Pulizia 2.0 is a cleaning service in the city of Milan.
        </p>
      </div>
    </div>
  );
};
