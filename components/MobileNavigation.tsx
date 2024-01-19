"use client";
import { MobileNavigationPropsType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export default function MobileNavigation({
  session,
  providers,
  toggleDropdown,
  setToggleDropdown
}: MobileNavigationPropsType): JSX.Element {
  return (
    <div className="sm:hidden flex relative">
      {session?.user ? (
        <div className="flex">
          <Image
            className="rounded-full"
            src={session?.user?.image ?? ""}
            alt="profile image"
            width={35}
            height={35}
            onClick={() => setToggleDropdown(prev => !prev)}
          ></Image>
          {toggleDropdown ? (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My profile
              </Link>
              <Link
                href="/create-new-prompt"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create prompt
              </Link>
              <button
                type="button"
                className="mt-5 w-full black_btn"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className=""></div>
          )}
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers)?.map(provider => (
              <button
                type="button"
                key={provider.name}
                className="black_btn"
                onClick={() => {
                  signIn(provider.id);
                }}
              >
                Sign In
              </button>
            ))}
        </>
      )}
    </div>
  );
}
