"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = false;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  
  return (
    <div>
      <h2 className="text-bold">about</h2>
      <Link href="/about/address">Address</Link>
      <button onClick={handleNavigation}>Address2</button>
    </div>
  );
};

export default AboutPage;
