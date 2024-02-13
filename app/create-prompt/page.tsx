"use client";

import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Post } from "@/types";
import Form from "@/components/Form";

const EditPrompt: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Post>({ prompt: "", tag: "" });

  const editPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          creator: session?.user?.id,
          prompt: post.prompt,
          tag: post.tag
        })
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("error creating new post: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editPrompt}
    />
  );
};

export default EditPrompt;
