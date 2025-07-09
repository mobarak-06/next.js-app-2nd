"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  if (!pathName.includes("dashboard")) {
    return (
      <nav className="flex justify-center">
        <ul className="flex justify-between w-1/2">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/meals">meals</Link>
          <Link href="/products">products</Link>
          <Link href="/products/add">Add Product</Link>
        </ul>
      </nav>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
