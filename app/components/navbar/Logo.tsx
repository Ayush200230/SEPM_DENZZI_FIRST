"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex">
      <Image
        onClick={() => router.push("/")}
        className="hidden md:block cursor-pointer rounded-full"
        src="/images/Picture1.jpg"
        height="50"
        width="70"
        alt="Logo"
      />
      <div className="font-extrabold pl-3 pt-5 text-4xl font-serif">DENZZI</div>
    </div>
  );
};

export default Logo;
