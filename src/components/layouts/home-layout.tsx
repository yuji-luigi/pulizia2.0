import React, { ReactNode, useEffect, useRef, useState } from "react";
import { HeaderNav } from "./header/HeaderNav";
import { SideBar } from "./side-bar/SideBar";
import { Header } from "./header/Header";
import { Headers } from "./header";

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Headers />
      <div className="main-grid">
        <div>{children}</div>
        <SideBar />
      </div>
    </>
  );
};
