import React, { ReactNode, useEffect, useRef, useState } from "react";
import { HeaderNav } from "./header/HeaderNav";
import { SideBar } from "./side-bar/SideBar";
import { Header } from "./header/Header";
import { Headers } from "./header";
import "../../style/home.css";

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="home-layout-wrapper home">
      <Headers />
      <div className="main-grid">
        <div>{children}</div>
        <SideBar />
      </div>
    </div>
  );
};
