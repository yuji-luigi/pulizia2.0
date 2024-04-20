import React, { ReactNode } from "react";
import { HeaderNav } from "./header/HeaderNav";
import { SideBar } from "./side-bar/SideBar";
import { Header } from "./header/Header";

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="main-grid">
        <div>
          <HeaderNav />
          {children}
        </div>
        <SideBar />
      </div>
    </>
  );
};
