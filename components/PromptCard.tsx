"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

interface Prompt {
  creator;
  image: string;
  prompt: string;
  tag: string;
}
interface PromptCardProps {
  prompt: Prompt;
  handleTagClick: (tag: string) => void;
  handleEdit;
  handleDelete;
}
const PromptCard = ({
  prompt,
  handleTagClick,
  handleEdit,
  handleDelete
}: PromptCardProps) => {
  const [copied, setCopied] = useState("");
  const { data: session } = useSession();
  const pathName = usePathname();

  const handleCopy = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="prompt_card group">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={prompt?.creator?.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {prompt?.creator?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt?.creator?.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === prompt?.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === prompt?.prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {prompt?.prompt}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(prompt?.tag)}
      >
        {prompt?.tag}
      </p>
      {session?.user?.id === prompt?.creator?._id &&
        pathName === "/profile" && (
          <div className="group mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="hidden group-hover:block font-inter text-sm green_gradient cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="hidden group-hover:block ml-auto font-inter text-sm cursor-pointer text-red-500"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
    </div>
  );
};

export default PromptCard;