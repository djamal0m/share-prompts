"use client";

import { useState, useEffect, ChangeEvent } from "react";
import PromptCard from "./PromptCard";
import Prompt from "@/models/prompt";

const PromptCardList = ({
  prompts,
  handleTagClick,
  handleEdit,
  handleDelete
}) => {
  return (
    <div className="mt-16 prompt_layout">
      {prompts.map(prompt => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleDelete={() => {}}
          handleEdit={() => {}}
          handleTagClick={() => {}}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [prompts, setPrompts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPrompts(data);
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        prompts={prompts}
        handleTagClick={() => {}}
        handleDelete={() => {}}
        handleEdit={() => {}}
      />
    </section>
  );
};

export default Feed;
