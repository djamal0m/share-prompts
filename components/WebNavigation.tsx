import { WebNavigationPropsType } from "@/types";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function WebNavigation({
  session,
  providers
}: WebNavigationPropsType): React.ReactNode {
  return (
    <div className="sm:flex hidden">
      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create prompt
          </Link>

          <button
            type="button"
            className="outline_btn"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
          <Link href="/profile">
            <Image
              src={session?.user?.image ?? ""}
              alt="profile image"
              width={35}
              height={35}
              className="rounded-full"
            ></Image>
          </Link>
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
