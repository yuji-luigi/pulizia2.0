import React, { MutableRefObject } from "react";

export const Header = ({ headerRef }: { headerRef: MutableRefObject<any> }) => {
  return (
    <header ref={headerRef} className="header">
      <h2 className="logo-text">Pulizia 2.0</h2>
    </header>
  );
};
