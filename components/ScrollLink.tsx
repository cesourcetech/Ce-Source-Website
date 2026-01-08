"use client";

import React from "react";
import Link from "next/link";

interface ScrollLinkProps {
  id: string;
  children: React.ReactNode;
  offset?: number; // for fixed header
  className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({
  id,
  children,
  offset = 0,
  className,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={`#${id}`}
      onClick={handleClick}
      className={className}
      scroll={false}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
