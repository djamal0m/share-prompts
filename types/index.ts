import { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import { Session } from "next-auth";

export type ProvidersType = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
> | null;

export type WebNavigationPropsType = {
  session: Session | null;
  providers: ProvidersType;
};

export type MobileNavigationPropsType = {
  session: Session | null;
  providers: ProvidersType;
  toggleDropdown: boolean;
  setToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ProviderPropsType = {
  children: React.ReactNode;
  session?: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    expires: string;
  } | null;
};
