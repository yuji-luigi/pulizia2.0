"use client";
import React, { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { HeaderNav } from "./HeaderNav";

export const Headers = () => {
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the state based on the visibility of the element
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // observing for viewport
        rootMargin: "1px",
        threshold: 0.5, // Adjust this value according to your needs
      }
    );

    // Start observing the element
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []); // Empty array ensures the effect runs only on mount and unmount
  return (
    <>
      <Header headerRef={headerRef} />
      <HeaderNav isHeaderVisible={isVisible} />
    </>
  );
};
