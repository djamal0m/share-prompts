import { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import { Session } from "next-auth";
import { Dispatch, SetStateAction } from "react";
import { Schema, Document } from "mongoose";
import { NextApiRequest } from "next";

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

export interface Post {
  prompt: string;
  tag: string;
}
export interface CreatePostFormProps {
  type: string;
  post: Post;
  setPost: Dispatch<SetStateAction<Post>>;
  submitting: boolean;
  handleSubmit;
}

export interface IPrompt extends Document, NextApiRequest {
  creator: Schema.Types.ObjectId;
  prompt: string;
  tag: string;
}
