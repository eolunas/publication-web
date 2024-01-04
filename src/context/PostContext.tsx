"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
type PostContextType = {
  posts: IPost[];
  addPosts: (posts: any) => void;
  updatePost: (id: number, updatedPost: IPost) => void;
  clearPosts: () => void;
  deletePost: (id: number) => void;
};

const PostContext = createContext<PostContextType | null>(null);

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("usePosts must be used within a PostProvider");
  return context;
};

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const updatePost = (id: number, updatedPost: IPost) =>
    setPosts([
      ...posts.map((posts) =>
        posts.id === id ? { ...posts, ...updatedPost } : posts
      ),
    ]);

  const addPosts = (posts: any) =>
    setPosts((prevData) => {
      if (!prevData) return posts;
      else return [...prevData, ...posts];
    });

  const clearPosts = () => setPosts([]);

  const deletePost = (id: number) =>
    setPosts([...posts.filter((post: IPost) => post.id !== id)]);

  return (
    <PostContext.Provider
      value={{
        posts,
        addPosts,
        updatePost,
        clearPosts,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
