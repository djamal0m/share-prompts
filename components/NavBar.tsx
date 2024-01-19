"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getProviders, useSession } from "next-auth/react";
import WebNavigation from "./WebNavigation";
import MobileNavigation from "./MobileNavigation";
import { ProvidersType } from "@/types";

export default function NavBar(): JSX.Element {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<ProvidersType>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response: ProvidersType = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full pt-3 mb-16">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={20}
          height={20}
        ></Image>
        <p className="logo_text">Prompts</p>
      </Link>
      <WebNavigation session={session} providers={providers} />
      <MobileNavigation
        session={session}
        providers={providers}
        toggleDropdown={toggleDropdown}
        setToggleDropdown={setToggleDropdown}
      />
    </nav>
  );
}
