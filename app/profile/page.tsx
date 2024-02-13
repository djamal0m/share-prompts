"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";

import Profile from "@/components/Profile";

const UserProfile = () => {
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState([]);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await response.json();
      setPrompts(data);
    };
    if (session?.user?.id) fetchPosts();
  }, [session?.user?.id]);

  useEffect(() => {
    console.log("confirmDelete: ", confirmDelete);
  }, [confirmDelete]);
  const handleEdit = async prompt => {
    router.push(`/update-prompt?id=${prompt._id}`);
  };
  const handleDelete = async prompt => {
    setIsOpen(true);
    if (confirmDelete) {
      try {
        await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: "DELETE"
        });
        const filteredPrompts = prompts.filter(p => p._id !== prompt._id);
        setPrompts(filteredPrompts);
        setIsOpen(false);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div>
      <Profile
        name={session?.user?.name}
        desc="Welcome to your profile page"
        data={prompts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Modal
        isOpen={isOpen}
        confirmDelete={confirmDelete}
        setConfirmDelete={setConfirmDelete}
      />
    </div>
  );
};

export default UserProfile;
