"use client";

import { ProviderPropsType } from "@/types";
import { Session } from "next-auth";
import { SessionProvider, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Provider({ children }: ProviderPropsType): JSX.Element {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
